import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import SideBar from "@/components/SideBar";
import DashboardTitle from "./DashboardTitle";
import { useEffect, useState } from "react";
import { IBook, getBooks } from "@/utils/api/books";
import EditBookDialog from "@/pages/dashboard/BookDialog/EditBookDialog";
import DeleteBookDialog from "@/pages/dashboard/BookDialog/DeleteBookDialog";
import { toast } from "@/components/ui/use-toast";
import AddBookDialog from "./BookDialog/AddBookDialog";

const ListBook = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await getBooks();
      setBooks(result!.payload.datas);
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Error",
          description: "Oops! Something went wrong",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="container">
      <DashboardTitle />
      <div className="flex h-full w-full">
        <SideBar />
        <div className="flex grow flex-col">
          <div className="mb-9 flex w-full border-b pb-5">
            <div className="flex grow flex-col justify-between">
              <p className="text-[20px] font-semibold">Book List</p>
              <p className="text-[14px] font-medium text-slate-600">
                Manage books in Library
              </p>
            </div>

            <div className="flex items-center">
              <AddBookDialog />
            </div>
          </div>
          <div className="flex">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">No</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>ISBN</TableHead>
                  <TableHead>Featured</TableHead>
                  <TableHead></TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {books.map((book, i) => {
                  return (
                    <TableRow key={book.id}>
                      <TableCell className="font-medium">{i + 1}</TableCell>
                      <TableCell>{book.title}</TableCell>
                      <TableCell>{book.author}</TableCell>
                      <TableCell>{book.category}</TableCell>
                      <TableCell>{book.isbn}</TableCell>
                      <TableCell>{`${book.featured}`}</TableCell>
                      <TableCell className="text-right">
                        <EditBookDialog key={book.id} data={book} />
                      </TableCell>
                      <TableCell className="text-right">
                        <DeleteBookDialog key={book.id} id={book.id.toString()} status="deleteBook" />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBook;
