import React from 'react';

interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
}

export default function CodeBlock({ code, language, filename }: CodeBlockProps) {
  return (
    <div className="code-block-wrapper">
      <div className="code-block-header">
        <div className="code-block-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <span className="code-block-lang">{language}</span>
        {filename && (
          <span className="code-block-filename">{filename}</span>
        )}
      </div>
      <pre className="code-block-content">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}