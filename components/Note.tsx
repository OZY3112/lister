import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Note() {
  const [state, setState] = useState("");
  const [Value, setValue] = useState("");

  return (
    <figure className="w-full min-h-full">
      <ReactQuill
        theme="snow"
        value={Value}
        onChange={(e) => setState(e)}
      />
      <button
        onClick={() => {
          setValue(state);
        }}
      >
        save
      </button>
    </figure>
  );
}
