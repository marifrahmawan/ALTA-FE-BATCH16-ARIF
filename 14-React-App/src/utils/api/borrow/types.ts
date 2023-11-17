export interface IBorrowedBooks {
  id: number;
  borrow_date: string;
  due_date: string;
  return_date: string;
  book: {
    id: number;
    title: string;
    cover_image: string;
  };
  user: {
    id: number;
    full_name: string;
  };
}
