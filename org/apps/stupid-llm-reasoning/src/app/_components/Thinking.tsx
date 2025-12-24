"use client";

import { api } from "~/trpc/react";

let thinking = "";

const Thinking = () => {
  const { data } = api.ollama.onMessageAdd.useSubscription({ roomId: "1" });

  thinking = thinking + " " + `${data}`;

  return (
    <div className="h-full w-full rounded-md p-2">
      <div className="flex w-full justify-end">Why is the sky blue?</div>
      <p className="text-muted-foreground/60">{thinking}</p>
    </div>
  );
};

export default Thinking;
