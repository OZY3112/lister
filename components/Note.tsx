import { Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Note({ note }: any) {
  const [showChild, setShowChild] = useState(false);
  console.log(note);
  useEffect(() => {
    setShowChild(true);
  }, []);
  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") return <></>;
  else
    return (
      <figure className="w-full min-h-full">
        <Textarea
          defaultValue={note.content}
          onChange={(e: any) => (note.content = e.target.value)}
          className="w-full min-h-full"
        />
      </figure>
    );
}
