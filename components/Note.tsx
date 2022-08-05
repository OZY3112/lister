import { useEffect, useState } from "react";

export default function Note({ note }: any) {
  return (
    <figure className="w-full min-h-full">
      <textarea
        defaultValue={note.content}
        onChange={(e: any) => (note.content = e.target.value)}
        className="w-full min-h-full resize-none"
      />
      <button className="">save</button>
    </figure>
  );
}
