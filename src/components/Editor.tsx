import React from "react";

type editorType = {
  markdown: string;
  setMarkdown: (markdown: string) => void;
};

function Editor({ markdown, setMarkdown }: editorType) {
  return (
    <div className="border-r-2 border-gray-700">
      <div className="w-full bg-gray-900 p-3 text-gray-300 uppercase tracking-wider">
        Editor
      </div>
      <textarea
        className="w-full h-full bg-[#2C3044] outline-none p-6"
        onChange={(e) => setMarkdown(e.target.value)}
        value={markdown}
      />
    </div>
  );
}

export default Editor;
