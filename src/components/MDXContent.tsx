import React from 'react';
import { marked } from 'marked';
import hljs from 'highlight.js';
import Image from 'next/image';
import 'highlight.js/styles/github-dark.css';

// Configure marked for code highlighting
const renderer = new marked.Renderer();

renderer.code = function({ text, lang }: { text: string; lang?: string }) {
  const validLang = lang && hljs.getLanguage(lang) ? lang : '';
  const highlighted = validLang ? hljs.highlight(text, { language: validLang }).value : hljs.highlightAuto(text).value;
  
  return `
    <div class="code-block-wrapper">
      <div class="code-block-header">
        <div class="code-block-dots">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
        </div>
        <span class="code-block-lang">${validLang || 'text'}</span>
      </div>
      <pre class="code-block-content"><code class="language-${validLang}">${highlighted}</code></pre>
    </div>
  `;
};

marked.setOptions({
  renderer: renderer,
  breaks: true,
  gfm: true
});

// Function to replace text-based stars with styled spans
function processStarRatings(content: string): string {
  // Replace star patterns like (★★★★★), (★★★★☆), (★★★☆☆), etc. with styled spans
  return content.replace(/\([★☆]+\)/g, (match) => {
    const filledStars = (match.match(/★/g) || []).length;
    const emptyStars = (match.match(/☆/g) || []).length;
    // const totalStars = filledStars + emptyStars; // Not used currently
    
    // Create the styled spans
    const filledSpan = filledStars > 0 ? `<span class="star-rating">${'★'.repeat(filledStars)}</span>` : '';
    const emptySpan = emptyStars > 0 ? `<span class="star-rating-empty">${'☆'.repeat(emptyStars)}</span>` : '';
    
    return `(${filledSpan}${emptySpan})`;
  });
}

interface MDXContentProps {
  content: {
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
  };
}

export default function MDXContentComponent({ content }: MDXContentProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="prose prose-lg max-w-none leading-relaxed">
            {/* Featured Image */}
            {content.featuredImage && (
              <div className="mb-8">
                <Image
                  src={content.featuredImage}
                  alt={`${content.title} - ${content.description.substring(0, 100)}...`}
                  width={800}
                  height={400}
                  className="w-full h-64 rounded-2xl shadow-lg object-cover"
                  priority={content.featured}
                  loading={content.featured ? "eager" : "lazy"}
                />
              </div>
            )}
        
        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
              {content.category}
            </span>
            {content.rating && content.rating > 0 ? (
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(content.rating!) ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            ) : null}
          </div>
          
              <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-8 leading-normal tracking-normal">
                {content.title}
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-7 tracking-normal">
                {content.description}
              </p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400 mb-8">
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="font-medium">{content.author}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">{new Date(content.date).toLocaleDateString()}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">{content.readTime}</span>
            </div>
          </div>
          
          {content.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {content.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm rounded-full hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>
        
            {/* Content */}
            <div className="prose prose-lg max-w-none dark:prose-invert
              prose-headings:text-slate-900 dark:prose-headings:text-white
              prose-h1:text-xl prose-h1:font-medium prose-h1:mb-4 prose-h1:mt-8 prose-h1:text-slate-800 dark:prose-h1:text-slate-200 prose-h1:leading-loose prose-h1:tracking-normal prose-h1:font-sans
              prose-h2:text-lg prose-h2:font-medium prose-h2:mb-3 prose-h2:mt-6 prose-h2:text-slate-800 dark:prose-h2:text-slate-200 prose-h2:leading-loose prose-h2:tracking-normal prose-h2:font-sans
              prose-h3:text-base prose-h3:font-medium prose-h3:mb-2 prose-h3:mt-4 prose-h3:text-slate-700 dark:prose-h3:text-slate-300 prose-h3:leading-loose prose-h3:tracking-normal prose-h3:font-sans
              prose-h4:text-sm prose-h4:font-medium prose-h4:mb-2 prose-h4:mt-3 prose-h4:text-slate-700 dark:prose-h4:text-slate-300 prose-h4:leading-loose prose-h4:tracking-normal prose-h4:font-sans
              prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-p:mb-6 prose-p:leading-8 prose-p:text-base prose-p:tracking-normal prose-p:font-sans
              prose-strong:text-slate-900 dark:prose-strong:text-white prose-strong:font-semibold
              prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 dark:prose-blockquote:bg-blue-900/20 prose-blockquote:text-blue-900 dark:prose-blockquote:text-blue-100 prose-blockquote:my-8 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-lg prose-blockquote:border-l-4
              prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-a:transition-colors
              prose-li:text-slate-700 dark:prose-li:text-slate-300 prose-li:mb-2 prose-li:leading-8 prose-li:tracking-normal prose-li:font-sans
              prose-ul:my-6 prose-ol:my-6 prose-li:marker:text-slate-400 dark:prose-li:marker:text-slate-500 prose-li:pl-2
              prose-table:text-sm prose-th:bg-slate-50 dark:prose-th:bg-slate-800 prose-th:font-semibold prose-td:border-slate-200 dark:prose-td:border-slate-700 prose-table:my-8
              prose-img:rounded-lg prose-img:shadow-lg prose-img:my-8 prose-img:border prose-img:border-slate-200 dark:prose-img:border-slate-700 prose-img:w-full prose-img:h-auto
              prose-hr:my-12 prose-hr:border-slate-200 dark:prose-hr:border-slate-700">
          <div dangerouslySetInnerHTML={{ __html: marked(processStarRatings(content.content)) }} />
        </div>
      </article>
    </div>
  );
}
