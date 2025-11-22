import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import EventEmitter, { on } from "events";

type Messege = {
  id: string;
  roomId: string;
  text: string;
  sentAt: string;
}

export const ollamaRouter = createTRPCRouter({
  onMessageAdd: publicProcedure
  .input(
    z.object({
      roomId: z.string(),
    }),
  )
  .subscription(async function* ({ input, ctx, signal }) {
    // Important: use a dedicated subscriber client
    const subscriber = ctx.redisClient.duplicate();
    await subscriber.connect();

    const emitter = new EventEmitter();
    const channel = `room:${input.roomId}`;

    try {
      await subscriber.subscribe(channel, (message) => {
        try {
          const parsed = JSON.parse(message) as Messege;
          emitter.emit("update", parsed);
        } catch (e) {
          // optionally log & ignore bad messages instead of crashing everything
          console.error("Failed to parse Redis message", e);
        }
      });

      // Keep subscription alive and stream updates to the client
      for await (const [data] of on(emitter, "update", { signal })) {
        yield data as Messege;
      }
    } finally {
      // Clean up when the client unsubscribes / disconnects
      try {
        await subscriber.unsubscribe(channel);
      } catch (e) {
        console.error("Failed to unsubscribe Redis channel", e);
      }
      await subscriber.quit();
    }
  }),
  sendMessage: publicProcedure
    .input(
      z.object({
        roomId: z.string(),
        text: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const message = {
        id: Date.now().toString(),
        roomId: input.roomId,
        text: input.text,
        sentAt: new Date().toISOString(),
      };

      // store in db if you want...
      // await ctx.db.message.create(...)

      // publish over Redis
      await ctx.redisClient.publish(
        `room:${input.roomId}`,
        JSON.stringify(message),
      );

      return message;
    }),
});
