"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

type CodeBlockProps = {
  children: string;
  className?: string;
};

const CodeBlock = ({ children, className }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  // Extract language from className (format: language-js)
  const language = className?.replace(/language-/, "") || "text";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      {/* Language badge and copy button */}
      <div className="flex items-center justify-between px-4 py-2 bg-card/70 border-b border-white/10 rounded-t-lg">
        <span className="text-white/50 text-xs font-mono uppercase">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-white/50 hover:text-primary transition-colors text-xs"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <pre className="bg-card/70 rounded-b-lg p-4 overflow-x-auto">
        <code className={`text-sm font-mono ${className}`}>{children}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
