
import { createClient } from "redis";
export const redisClient = createClient();

redisClient.on("connect", () => {
  console.log("Redis: connecting…");
});

redisClient.on("ready", () => {
  void (async () => {
    console.log("Redis ready. Active clients:");
    const list = await redisClient.sendCommand(["CLIENT", "LIST"]);
    console.log(list);
  })();
});

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
