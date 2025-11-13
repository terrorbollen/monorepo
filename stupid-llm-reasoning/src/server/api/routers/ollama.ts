import { createTRPCRouter, publicProcedure } from "../trpc";
import {z} from 'zod'

export const ollamaRouter = createTRPCRouter({
  sendMessage: publicProcedure
    .input(
      z.object({
        roomId: z.string(),
        text: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      console.log("LOL")
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
