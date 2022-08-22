import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Note() {

    return (
      <figure className="w-full min-h-full">
        <ReactQuill theme="snow" value={""} onChange={(e) => console.log(e)} />
      </figure>
    );
}
