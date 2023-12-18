import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const modelsRouter = createTRPCRouter({
  getModels: protectedProcedure.query(({ ctx }) => {
    return ctx.db.model.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),
});
