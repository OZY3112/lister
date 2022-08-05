import { Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Note({ note }: any) {
  // console.log(note);
    return (
      <figure className="w-full min-h-full">
        <Textarea
          defaultValue={note.content}
          onChange={(e: any) => (note.content = e.target.value)}
          className="w-full min-h-full"
        />
        <button className="">
          save
        </button>
      </figure>
    );
}
