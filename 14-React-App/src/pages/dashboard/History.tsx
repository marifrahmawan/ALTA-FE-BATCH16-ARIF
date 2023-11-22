import { useEffect, useState } from "react";
import { format } from "date-fns";

import EditBorrowedBook from "@/pages/dashboard/BookDialog/EditBorrowedBookDialog";
import DeleteBookDialog from "@/pages/dashboard/BookDialog/DeleteBookDialog";
import DashboardTitle from "./DashboardTitle";
import SideBar from "@/components/SideBar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { IBorrowedBooks, getBorrowedBooks } from "@/utils/api/borrow";

const History = () => {
  const [borrowedBooks, setBorrowedBooks] = useState<IBorrowedBooks[]>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getBorrowedBooks();

      setBorrowedBooks(res?.payload.datas);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <DashboardTitle />

      <div className="flex h-full w-full">
        <SideBar />

        <div className="flex grow flex-col">
          <div className="mb-9 w-full border-b pb-5">
            <p className="text-[20px] font-semibold">User History Borrow</p>
            <p className="text-[14px] font-medium text-slate-600">
              Manage user borrowed Books
            </p>
          </div>

          <div className="flex">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">No</TableHead>
                  <TableHead>User Name</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Borrow Date</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Return Date</TableHead>
                  <TableHead></TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {borrowedBooks?.map((borrowedBook, i) => {
                  return (
                    <TableRow key={borrowedBook.id}>
                      <TableCell className="font-medium">{i + 1}</TableCell>
                      <TableCell>{borrowedBook.user?.full_name}</TableCell>
                      <TableCell>{borrowedBook.book.title}</TableCell>
                      <TableCell>
                        {format(
                          new Date(borrowedBook.borrow_date),
                          "MMMM dd, yyyy",
                        )}
                      </TableCell>
                      <TableCell>
                        {format(
                          new Date(borrowedBook.due_date),
                          "MMMM dd, yyyy",
                        )}
                      </TableCell>
                      <TableCell>
                        {borrowedBook.return_date
                          ? format(
                              new Date(borrowedBook.return_date),
                              "MMMM dd, yyyy",
                            )
                          : ""}
                      </TableCell>
                      <TableCell className="text-right">
                        <EditBorrowedBook
                          key={borrowedBook.id}
                          id_borrow={borrowedBook.id}
                          borrow_date={borrowedBook.borrow_date}
                          due_date={borrowedBook.due_date}
                          return_date={borrowedBook.return_date}
                        />
                      </TableCell>
                      <TableCell className="text-right">
                        <DeleteBookDialog
                          key={borrowedBook.id}
                          id={borrowedBook.id.toString()}
                          status='deleteBorrow'
                        />
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

export default History;
