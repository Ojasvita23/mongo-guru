import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/monokai.css";

const MarkdownRenderer = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
      components={{
        h1: ({ children }) => (
          <h1 className="text-2xl font-bold">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-xl font-semibold mt-4">{children}</h2>
        ),
        ul: ({ children }) => <ul className="list-disc pl-5">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal pl-5">{children}</ol>,
        li: ({ children }) => <li className="mb-1">{children}</li>,
        table: ({ children }) => (
          <table className="border-collapse border border-gray-300 w-full">
            {children}
          </table>
        ),
        thead: ({ children }) => (
          <thead className="bg-gray-200 border border-gray-300">
            {children}
          </thead>
        ),
        tbody: ({ children }) => (
          <tbody className="border border-gray-300">{children}</tbody>
        ),
        tr: ({ children }) => (
          <tr className="border border-gray-300">{children}</tr>
        ),
        th: ({ children }) => (
          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="border border-gray-300 px-4 py-2">{children}</td>
        ),
        code: ({ node, className, children }) => {
          const isInline = !className;
          return isInline ? (
            <code className="bg-gray-200 text-red-600 px-1 rounded">
              {children}
            </code>
          ) : (
            <pre className="bg-black text-white p-4 rounded overflow-auto">
              <code>{children}</code>
            </pre>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
