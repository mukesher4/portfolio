import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'  // For GitHub Flavored Markdown
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'  // For code highlighting
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { CSSProperties } from 'react'

export default function Markdown({ content }: { content: string }) {
  return (
    <div className="prose prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <SyntaxHighlighter
                style={vscDarkPlus as {
                  [key: string]: CSSProperties;
              }}
                language={match[1]}
                PreTag="div"
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
} 