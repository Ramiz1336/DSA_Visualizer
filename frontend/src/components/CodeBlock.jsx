import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-full sm:max-w-2xl relative bg-gray-900 text-white p-4 rounded-md overflow-x-auto mt-6 pr-10 mx-2">
      <button
        onClick={handleCopy}
        className="sticky top-2 left-2 bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 text-xs rounded-md transition-all duration-200"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <SyntaxHighlighter
        language="javascript"
        style={oneDark}
        showLineNumbers
        customStyle={{
          background: "transparent",
          fontSize: "0.85rem",
          margin: 0,
          boxShadow: "none",
        }}
        codeTagProps={{
          style: {
            background: "transparent", 
          },
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
