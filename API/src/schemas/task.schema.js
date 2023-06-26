import { z } from "zod";

export const taskSchema = z.object({
  title: z.string({
    required_error: 'please enter a title'
  }).min(4, {
    message: "Title must be at least 4 characters",
  }),
  description: z.string({
    required_error: 'please enter a description'
  }).min(10, {
    message: "Title must be at least 10 characters",
  }),
  date: z.string().datetime().optional()
})