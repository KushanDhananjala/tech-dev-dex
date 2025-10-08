import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface MDXContent {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
  featured?: boolean;
  rating?: number;
  featuredImage?: string;
  content: string;
}

const contentDirectory = path.join(process.cwd(), 'src/content');

export function getMDXContent(slug: string, category: string): MDXContent | null {
  try {
    const fullPath = path.join(contentDirectory, category, slug, 'index.mdx');
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || 'Untitled',
      description: data.description || '',
      author: data.author || 'TechDevDex Team',
      date: data.date || new Date().toISOString().split('T')[0],
      category: data.category || category,
      tags: data.tags || [],
      readTime: data.readTime || '5 min',
      featured: data.featured || false,
      rating: data.rating || 0,
      featuredImage: data.featuredImage || `/images/posts/${slug}.svg`,
      content: content
    };
  } catch (error) {
    console.error(`Error reading MDX file for ${category}/${slug}:`, error);
    return null;
  }
}

export function getAllMDXContent(category: string): MDXContent[] {
  try {
    const categoryPath = path.join(contentDirectory, category);
    
    if (!fs.existsSync(categoryPath)) {
      return [];
    }

    const items = fs.readdirSync(categoryPath);
    const allContent: MDXContent[] = [];

    for (const item of items) {
      const itemPath = path.join(categoryPath, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        const content = getMDXContent(item, category);
        if (content) {
          allContent.push(content);
        }
      }
    }

    return allContent.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error(`Error reading MDX content for category ${category}:`, error);
    return [];
  }
}
