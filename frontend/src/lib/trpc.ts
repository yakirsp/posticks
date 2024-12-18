import type { TrpcRouter } from "@posticks/backend/src/trpc";
import { createTRPCReact } from "@trpc/react-query";

const trpc = createTRPCReact<TrpcRouter>();
console.log(trpc)
