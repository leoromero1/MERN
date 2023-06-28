import { z } from "zod";

export const taskSchema = z.object({
  title: z.string({
    required_error: 'please enter a title'
  }).min(2, {
    message: "Title must be at least 2 characters",
  }),
  description: z.string({
    required_error: 'please enter a description'
  }).min(3, {
    message: "Description must be at least 3 characters",
  }),
  date: z.string().datetime().optional()
})