import { useEffect, useState } from "react";

import BookCard from "@/components/BookCard";
import { IBook } from "@/utils/api/books";
import { getBooks } from "@/utils/api/books/api";
import FilterBook from "./FilterBook";
import { ListFilterIcon } from "lucide-react";

const Book = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  // will use global state
  // const [filterParams, setFilterParams] = useSearchParams();

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
