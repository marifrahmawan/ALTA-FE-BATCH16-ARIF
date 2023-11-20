import * as z from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export interface IBook {
  id: number;
  title: string;
  featured: boolean;
  author: string;
  isbn: string;
  category: string;
  description: string;
  cover_image?: string;
}

export type BookContextType = {
  bookItems: IBook[];
};

export const editBookSchema = z.object({
  id: z.number(),
  title: z.string().min(1, { message: "Title is Required" }),
  featured: z.boolean(),
  author: z.string().min(1, { message: "Author is Required" }),
  isbn: z.string().min(1, { message: "ISBN is Required" }),
  category: z.string().min(1, { message: "Category is Required" }),
  description: z.string().min(1, { message: "Description is Required" }),
  cover_image: z
    .any()
    .refine((file) => file?.length == 1, "File is required.")
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.[0]?.type),
      "Only .jpg, .jpeg, .png formats are supported",
    )
    .refine((file) => file[0]?.size <= MAX_FILE_SIZE, `Max image size is 5MB`)
    .optional()
    .or(z.literal("")),
});

export type IEditBook = z.infer<typeof editBookSchema>;
