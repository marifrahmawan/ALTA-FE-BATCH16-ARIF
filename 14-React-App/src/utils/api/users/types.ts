import * as z from "zod";

export interface IProfile {
  id: number;
  full_name: string;
  email: string;
  role: string;
  profile_picture: string;
  address: string;
  phone_number: string;
  password?: string;
}

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const editUserProfileSchema = z
  .object({
    full_name: z.string().min(1, { message: "Full name is required" }),
    email: z.string().min(1, { message: "Email is required" }).email(),
    password: z.union([
      z.string().length(0, { message: "Password min. length is 6 char" }),
      z
        .string()
        .min(6)
        .optional()
        .transform((e) => (e === "" ? undefined : e)),
    ]),
    repassword: z.union([
      z.string().length(0, { message: "Password min. length is 6 char" }),
      z
        .string()
        .min(6)
        .optional()
        .transform((e) => (e === "" ? undefined : e)),
    ]),
    role: z.string().default("user"),
    address: z.string().min(1, { message: "Address is required" }),
    phone_number: z
      .string()
      .min(7, { message: "Phone number minimum length is 7" }),
    profile_picture: z
      .any()
      .refine(
        (files) => files?.[0]?.size <= MAX_FILE_SIZE,
        "Max image size is 5MB",
      )
      .refine(
        (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, .png formats are supported",
      )
      .optional()
      .or(z.literal("")),
  })
  .refine((data) => data.password === data.repassword, {
    message: `Password don't match`,
    path: ["repassword"],
  });

export type IEditUserProfile = z.infer<typeof editUserProfileSchema>;
