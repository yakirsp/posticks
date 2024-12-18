import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { trpcRouter } from './trpc';

const app = express();
app.use(express.json());
app.use('/trpc', trpcExpress.createExpressMiddleware({ router: trpcRouter }));

app.listen(4321, () => {
  console.info('Listening at http://localhost:4321');
});
