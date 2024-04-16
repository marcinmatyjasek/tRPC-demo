import { z } from "zod";

import { publicProcedure, router } from "../trpc";

const todoSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string().nullable(),
  isCompleted: z.boolean(),
});

const createTodoInput = todoSchema.pick({ title: true, content: true });

const deleteTodoInput = z.number();

export const todoRouter = router({
  get: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.todo.findMany();
  }),
  create: publicProcedure
    .input(createTodoInput)
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.todo.create({ data: input });
    }),
  update: publicProcedure.input(todoSchema).mutation(async ({ ctx, input }) => {
    return await ctx.prisma.todo.update({
      where: {
        id: input.id,
      },
      data: input,
    });
  }),
  delete: publicProcedure
    .input(deleteTodoInput)
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.todo.delete({
        where: {
          id: input,
        },
      });
    }),
});
