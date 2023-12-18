import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export type StringStringObject = Record<string, string>;

export const modelsRouter = createTRPCRouter({
  getModels: protectedProcedure.query(({ ctx }) => {
    return ctx.db.model.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),

  createModel: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        type: z.string(),
        modelString: z.string(),
        // json type, these should be string -> string
        features: z.record(z.string()),
        transformations: z.record(z.string()),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      const newModel = await ctx.db.model.create({
        data: {
          title: input.title,
          description: input.description,
          type: input.type,
          modelString: input.modelString,
          features: input.features,
          transformations: input.transformations,
          userId: userId,
        },
      });
      return newModel;
    }),
});
