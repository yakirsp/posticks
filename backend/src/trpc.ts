import { initTRPC } from '@trpc/server';

const trpc = initTRPC.create();

const posts = [
  { title: 'post 1', text: 'post 1 text' },
  { title: 'post 2', text: 'post 2 text' },
  { title: 'post 3', text: 'post 3 text' },
  { title: 'post 4', text: 'post 4 text' },
  { title: 'post 5', text: 'post 5 text' },
  { title: 'post 6', text: 'post 6 text' },
  { title: 'post 7', text: 'post 7 text' },
];

export const trpcRouter = trpc.router({
  getPosts: trpc.procedure.query(() => {
    return { posts };
  }),
});

export type TrpcRouter = typeof trpcRouter;
