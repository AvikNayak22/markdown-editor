import { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
function App() {
  const storedMarkdown = localStorage.getItem("markdown");
  const [markdown, setMarkdown] = useState<string>(
    storedMarkdown ? storedMarkdown : ""
  );

  const callback = (markdown: string) => {
    setMarkdown(markdown);
    localStorage.setItem("markdown", markdown);
  };

  return (
    <>
      <main className="w-full h-screen grid grid-cols-1 sm:grid-cols-2  bg-gray-200 text-gray-300">
        <Editor markdown={markdown} setMarkdown={callback} />
        <Preview markdown={markdown} />
      </main>
    </>
  );
}

export default App;
