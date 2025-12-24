import { HydrateClient } from "~/trpc/server";
import Thinking from "./_components/Thinking";

export default async function Home() {
  return (
    <HydrateClient>
      <div>
        <h1 className="text-xl">Stupid LLM Reasonging.</h1>
        <p className="text-muted-foreground">Get into my brain and se how I resonate.</p>
      </div>
      <div className="h-full w-full bg-card">
        <Thinking />
      </div>
    </HydrateClient>
  );
}
