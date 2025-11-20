import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex h-full justify-center bg-red-200">
        <div className="flex flex-col mt-96 ">
          <h1 className="text-xl">Stupid LLM Reasonging.</h1>
          <p>Get into my brain and se how I resonate.</p>
        </div>
      </main>
    </HydrateClient>
  );
}
