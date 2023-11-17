import { IBorrowedBooks, IEditBorrowBook, editBorrowBookSchema } from "./types";
import { getBorrowedBooks, editBorrowedBook } from "./api";

export { getBorrowedBooks, editBorrowedBook, editBorrowBookSchema };
export type { IBorrowedBooks, IEditBorrowBook };
