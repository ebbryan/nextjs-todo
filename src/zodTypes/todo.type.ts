import z from "zod";

export const todoSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, "Title is required"),
  status: z.enum(["pending", "in_progress", "completed", "archived"]),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

export const todoResponseSchema = z.object({
  data: z.array(todoSchema),
  success: z.boolean(),
});

export type TodoType = z.infer<typeof todoSchema>;
export type TodoResponse = z.infer<typeof todoResponseSchema>;
