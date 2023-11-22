import * as z from "zod";

export interface IBorrowedBooks {
  id: number;
  borrow_date: Date;
  due_date: Date;
  return_date: Date;
  book: {
    id: number;
    title: string;
    cover_image: string;
  };
  user?: {
    id: number;
    full_name: string;
  };
}

export interface IAddBorrowBooks {
  bookId: number[];
  borrow_date: Date;
}

export const editBorrowBookSchema = z.object({
  borrow_date: z.coerce.date(),
  due_date: z.coerce.date(),
  return_date: z.coerce.date().optional(),
});

export type IEditBorrowBook = z.infer<typeof editBorrowBookSchema>;
