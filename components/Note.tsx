import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Note({ note }: any) {
  const [showPage, setshowPage] = useState(false);

  useEffect(() => setshowPage(true), []);

  if (!showPage) return;
  if (showPage)
    return (
      <figure className="w-full min-h-full">
        <ReactQuill theme="snow" value={""} onChange={(e) => console.log(e)} />
        <textarea
          defaultValue={note.content}
          onChange={(e: any) => (note.content = e.target.value)}
          className="w-full min-h-full resize-none"
        />
      </figure>
    );
}
