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

// const handler = applyWSSHandler({
//   client,
//   router: appRouter,
//   createContext: createTRPCContext,
//   // createContext,
//   // Enable heartbeat messages to keep connection open (disabled by default)
//   keepAlive: {
//     enabled: true,
//     // server ping message interval in milliseconds
//     pingMs: 30000,
//     // connection is terminated if pong message is not received in this many milliseconds
//     pongWaitMs: 5000,
//   },
// });
//



// wss.on("connection", (ws) => {
//   console.log(`➕➕ Connection (${wss.clients.size})`);
//   ws.once("close", () => {
//     console.log(`➖➖ Connection (${wss.clients.size})`);
//   });
//   ws.on("error", (err) => console.error("WS error", err));
// });
//
// console.log("✅ WebSocket Server listening on ws://localhost:3001");
// process.on("SIGTERM", () => {
//   console.log("SIGTERM");
//   handler.broadcastReconnectNotification();
//   wss.close();
// });
