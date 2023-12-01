import { useEffect, useState } from "react";

import BookCard from "@/components/BookCard";
import { IBook } from "@/utils/api/books";
import { getBooks } from "@/utils/api/books/api";
// import FilterBook from "./FilterBook";
import { ListFilterIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { Meta } from "@/utils/types/types";
import { toast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Pagination from "@/components/Pagination";

const Book = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [meta, setMeta] = useState<Meta>();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchBook = async () => {
      const query: { [key: string]: string } = {};

      for (const entry of searchParams.entries()) {
        query[entry[0]] = entry[1];
      }

      try {
        const result = await getBooks({ ...query });
        const { datas, ...rest } = result!.payload;
        setBooks(datas);
        setMeta(rest);
      } catch (error) {
        toast({
          title: "Oops! Something went wrong.",
          description: error!.toString(),
          variant: "destructive",
        });
      }
    };

    fetchBook();
  }, [searchParams]);

  const handlePaginationPage = (page: string | number) => {
    searchParams.set("page", String(page));
    setSearchParams(searchParams);
  };

  const handleChangeSort = (value: string) => {
    searchParams.set("sort", value);
    setSearchParams(searchParams);
  };

  return (
    <div className="container">
      <div className="mb-9 flex w-full items-center gap-3">
        <ListFilterIcon />
        <Select
          onValueChange={(value) => handleChangeSort(value)}
          data-testid="sort-by"
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="default">Default</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {books.map((book) => {
          return <BookCard key={book.id} data={book} />;
        })}
      </div>

      <Pagination
        meta={meta}
        onClickNext={() => handlePaginationPage(meta!.currentPage + 1)}
        onClickPrev={() => handlePaginationPage(meta!.currentPage - 1)}
        onClickPage={(page) => handlePaginationPage(page)}
      />
    </div>
  );
};

export default Book;
