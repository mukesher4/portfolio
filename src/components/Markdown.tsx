import ReactMarkdown from 'react-markdown'

export default function Markdown({ content }: { content: string }) {
  return (
    <div className="prose prose-invert">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
} 