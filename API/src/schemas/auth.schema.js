import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string({
      required_error: ["Username is required"],
    })
    .min(3, {
      message: ["Username must be at least 3 characters"],
    }),
  email: z
    .string({
      required_error: ["Email is required"],
    })
    .email({
      message: ["Invalid email"],
    }),
  password: z
    .string({
      required_error: ["Password is required"],
    })
    .min(5, {
      message: ["Password must be at least 5 characters"],
    }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: ["Email is required"],
    })
    .email({
      message: ["Invalid email"],
    }),
  password: z
    .string({
      required_error: ["Password is required"],
    })
    .min(5, {
      message: ["Password must be at least 5 characters"],
    }),
});

