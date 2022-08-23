import { useEffect, useState } from "react";
// Import the Slate editor factory.
import { createEditor } from 'slate'

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'

export default function Note() {
  return (
    <figure className="w-full min-h-full">
      {/* <ReactQuill
        theme="snow"
        value={""}
        onChange={(e) => console.log(e)}
      /> */}
    </figure>
  );
}
