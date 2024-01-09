import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
import dompurify from "dompurify";
import "highlight.js/styles/night-owl.css";

type previewType = {
  markdown: string;
};

function Preview({ markdown }: previewType) {
  const marked = new Marked(
    markedHighlight({
      langPrefix: "hljs language-",
      highlight(code, lang, info) {
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        return hljs.highlight(code, { language }).value;
      },
    })
  );
  const parsed = dompurify.sanitize(marked.parse(markdown));

  return (
    <div>
      <div className="w-full bg-gray-900 p-3 text-gray-300 uppercase tracking-wider">
        Preview
      </div>
      <div
        className="p-6 prose prose-headings:underline prose-a:text-blue-500 prose-li:marker:text-black"
        dangerouslySetInnerHTML={{ __html: parsed }}
      />
    </div>
  );
}

export default Preview;
