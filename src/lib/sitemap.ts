import { GetStaticProps } from "next";
import { getAllMDXContent } from "./mdx";

export interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
}

export function generateSitemap(): string {
  const baseUrl = "https://techdevdex.com";
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Static pages
  const staticPages: SitemapUrl[] = [
    {
      loc: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: "daily",
      priority: 1.0
    },
    {
      loc: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.8
    },
    {
      loc: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: 0.7
    },
    {
      loc: `${baseUrl}/privacy`,
      lastmod: currentDate,
      changefreq: "yearly",
      priority: 0.5
    },
    {
      loc: `${baseUrl}/terms`,
      lastmod: currentDate,
      changefreq: "yearly",
      priority: 0.5
    }
  ];

  // Category pages
  const categoryPages: SitemapUrl[] = [
    {
      loc: `${baseUrl}/tutorials`,
      lastmod: currentDate,
      changefreq: "daily",
      priority: 0.9
    },
    {
      loc: `${baseUrl}/reviews`,
      lastmod: currentDate,
      changefreq: "daily",
      priority: 0.9
    },
    {
      loc: `${baseUrl}/hardware`,
      lastmod: currentDate,
      changefreq: "daily",
      priority: 0.9
    },
    {
      loc: `${baseUrl}/productivity`,
      lastmod: currentDate,
      changefreq: "daily",
      priority: 0.9
    },
    {
      loc: `${baseUrl}/ai-trending`,
      lastmod: currentDate,
      changefreq: "daily",
      priority: 0.9
    },
    {
      loc: `${baseUrl}/web-dev`,
      lastmod: currentDate,
      changefreq: "daily",
      priority: 0.9
    }
  ];

  // Subcategory pages
  const subcategoryPages: SitemapUrl[] = [
    // Tutorials
    {
      loc: `${baseUrl}/tutorials/web-development`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8
    },
    {
      loc: `${baseUrl}/tutorials/productivity-tools`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8
    },
    {
      loc: `${baseUrl}/tutorials/programming-tips`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8
    },
    {
      loc: `${baseUrl}/tutorials/python-automation`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8
    },
    {
      loc: `${baseUrl}/tutorials/docker-setup-guides`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8
    },
    {
      loc: `${baseUrl}/tutorials/git-github-tutorials`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8
    },
    {
      loc: `${baseUrl}/tutorials/react-node-deployment`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8
    },
    
    // Reviews
    {
      loc: `${baseUrl}/reviews/ai-tools-review`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8
    },
    {
      loc: `${baseUrl}/reviews/productivity-tools-review`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8
    },
    {
      loc: `${baseUrl}/reviews/software-reviews`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8
    },
    {
      loc: `${baseUrl}/reviews/app-comparisons`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8
    },
    {
      loc: `${baseUrl}/reviews/gadget-reviews`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8
    },
    
    // Hardware
    {
      loc: `${baseUrl}/hardware/development-setup`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8
    },
    {
      loc: `${baseUrl}/hardware/gaming-hardware`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8
    },
    {
      loc: `${baseUrl}/hardware/peripherals`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8
    },
    {
      loc: `${baseUrl}/hardware/laptops-pcs`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8
    },
    {
      loc: `${baseUrl}/hardware/mobile-devices`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8
    },
    
    // Productivity
    {
      loc: `${baseUrl}/productivity/learning-resources`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8
    },
    {
      loc: `${baseUrl}/productivity/project-management`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8
    },
    {
      loc: `${baseUrl}/productivity/time-management`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8
    },
    {
      loc: `${baseUrl}/productivity/automation-scripts`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8
    },
    {
      loc: `${baseUrl}/productivity/development-tools`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8
    },
    
    // AI Trending
    {
      loc: `${baseUrl}/ai-trending/ai-coding-tools`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8
    },
    {
      loc: `${baseUrl}/ai-trending/ai-integration-tutorials`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8
    },
    {
      loc: `${baseUrl}/ai-trending/emerging-languages`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8
    },
    
    // Web Dev
    {
      loc: `${baseUrl}/web-dev/backend-development`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8
    },
    {
      loc: `${baseUrl}/web-dev/frontend-frameworks`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8
    },
    {
      loc: `${baseUrl}/web-dev/devops-deployment`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8
    },
    {
      loc: `${baseUrl}/web-dev/api-development`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8
    },
    {
      loc: `${baseUrl}/web-dev/database-management`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 0.8
    }
  ];

  // Get all MDX content for individual articles
  const allContent = getAllMDXContent();
  const articlePages: SitemapUrl[] = allContent.map(content => ({
    loc: `${baseUrl}/${content.category.toLowerCase().replace(/\s+/g, '-')}/${content.slug}`,
    lastmod: content.date,
    changefreq: "monthly" as const,
    priority: 0.7
  }));

  const allPages = [...staticPages, ...categoryPages, ...subcategoryPages, ...articlePages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
}
