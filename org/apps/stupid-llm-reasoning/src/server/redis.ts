import ollama from "ollama";
import { createClient } from "redis";
export const redisClient = createClient();

const message = { role: "user", content: "Why is the sky blue?" };

redisClient.on("connect", () => {
  console.log("Redis: connecting…");
});

const run = async () => {
  const response = await ollama.chat({
    model: "deepseek-r1:8b",
    messages: [message],
    stream: true,
  });

  for await (const part of response) {
    process.stdout.write(part.message.thinking ?? "");

    await redisClient.publish(
      `room:${1}`,
      JSON.stringify(part.message.thinking ?? ""),
    );
  }
};


redisClient.on("connect", () => {
  console.log("Redis: connecting…");
});

redisClient.on("ready", () => {
  void (async () => {
    console.log("Redis ready. Active clients:");
    const list = await redisClient.sendCommand(["CLIENT", "LIST"]);
    console.log(list)
    console.log("Starting Ollama")
    void run();
  })();
});
//
redisClient.on("reconnecting", () => {
  console.log("Redis: reconnecting…");
});

redisClient.on("end", () => {
  console.log("Redis: connection closed");
});

redisClient.on("error", (err) => {
  console.error("Redis Client Error:", err);
});

await redisClient.connect();
