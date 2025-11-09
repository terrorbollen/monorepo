import { tracked } from "@trpc/server";
import EventEmitter, { on } from "events";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

type EventMap<T> = Record<keyof T, any[]>;
class IterableEventEmitter<T extends EventMap<T>> extends EventEmitter<T> {
  toIterable<TEventName extends keyof T & string>(
    eventName: TEventName,
    opts?: NonNullable<Parameters<typeof on>[2]>,
  ): AsyncIterable<T[TEventName]> {
    return on(this as any, eventName, opts) as any;
  }
}

interface MyEvents {
  add: [Post];
  isTypingUpdate: [];
}

// In a real app, you'd probably use Redis or something
const ee = new IterableEventEmitter<MyEvents>();

// Mocked DB
interface Post {
  id: number;
  name: string;
}

const posts: Post[] = [
  {
    id: 1,
    name: "Hello World",
  },
];

export const postRouter = createTRPCRouter({
  onPostAdd: publicProcedure
    .input(
      z
        .object({
          // lastEventId is the last event id that the client has received
          // On the first call, it will be whatever was passed in the initial setup
          // If the client reconnects, it will be the last event id that the client received
          lastEventId: z.string().nullish(),
        })
        .optional(),
    )
    .subscription(async function* (opts) {
      if (opts?.input?.lastEventId) {
        // [...] get the posts since the last event id and yield them
      }
      // listen for new events
      for await (const [data] of on(ee, "add", {
        // Passing the AbortSignal from the request automatically cancels the event emitter when the subscription is aborted
        signal: opts.signal,
      })) {
        const post = data as Post;
        // tracking the post id ensures the client can reconnect at any time and get the latest events this id
        yield tracked(String(post.id), post);
      }
    }),
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ input }) => {
      const post: Post = {
        id: posts.length + 1,
        name: input.name,
      };
      posts.push(post);
      ee.emit('add', post );
      return post;
    }),

  getLatest: publicProcedure.query(() => {
    return posts.at(-1) ?? null;
  }),
});
