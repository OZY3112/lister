import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

export default function Note() {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => setShowChild(true), []);
  if (!showChild) return null;

  if (typeof window === "undefined") return <></>;
  else
    return (
      <figure className="w-full min-h-full">
        <ReactQuill
        theme="snow"
        value={""}
        onChange={(e) => console.log(e)}
      />
      </figure>
    );
}
