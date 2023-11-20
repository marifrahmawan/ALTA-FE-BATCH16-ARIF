import { useEffect, useState } from "react";

import BookCard from "@/components/BookCard";
import { IBook } from "@/utils/api/books";
import { getBooks } from "@/utils/api/books/api";
import FilterBook from "./FilterBook";
import { ListFilterIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const Book = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  const [sort] = useSearchParams();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const result = await getBooks(sort.get("sort")?.toString());
        setBooks(result!.payload.datas);
      } catch (error) {
        console.log(error);
      }
    };
    
    fetchBook();
  }, [sort]);

  return (
    <div className="container">
      <div className="mb-9 flex w-full items-center gap-3">
        <ListFilterIcon />
        <FilterBook />
      </div>
      <div className="grid grid-cols-4 gap-5">
        {books.map((book) => {
          return <BookCard key={book.id} data={book} />;
        })}
      </div>
    </div>
  );
};

export default Book;
