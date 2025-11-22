import { WebSocketServer } from "ws";
import { appRouter } from "./api/root";
import { createTRPCContext } from "./api/trpc";
import { applyWSSHandler } from "@trpc/server/adapters/ws";


export const wss = new WebSocketServer({
  port: 3001,
});

const handler = applyWSSHandler({
  wss,
  router: appRouter,
  createContext: createTRPCContext,
  // createContext,
  // Enable heartbeat messages to keep connection open (disabled by default)
  keepAlive: {
    enabled: true,
    // server ping message interval in milliseconds
    pingMs: 30000,
    // connection is terminated if pong message is not received in this many milliseconds
    pongWaitMs: 5000,
  },
});


wss.on("connection", (ws) => {
  console.log(`➕➕ Connection (${wss.clients.size})`);
  ws.once("close", () => {
    console.log(`➖➖ Connection (${wss.clients.size})`);
  });
  ws.on("error", (err) => console.error("WS error", err));
});

console.log("✅ WebSocket Server listening on ws://localhost:3001");
process.on("SIGTERM", () => {
  console.log("SIGTERM");
  handler.broadcastReconnectNotification();
  wss.close();
});
