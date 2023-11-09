import { useEffect, useState } from "react";

import BookCard from "@/components/BookCard";
import { IBook } from "@/utils/api/books";
import { getBooks } from "@/utils/api/books/api";

const Book = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await getBooks();
      setBooks(result.payload.datas);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-5">
        {books.map((book) => {
          return <BookCard key={book.id} data={book} />;
        })}
      </div>
    </div>
  );
};

export default Book;
