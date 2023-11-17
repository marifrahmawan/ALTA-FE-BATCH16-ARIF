import SideBar from "@/components/SideBar";
import DashboardTitle from "./DashboardTitle";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EditBookDialog from "@/components/EditBookDialog";
import DeleteBookDialog from "@/components/DeleteBookDialog";
import { useEffect, useState } from "react";
import { IBorrowedBooks, getBorrowedBooks } from "@/utils/api/borrow";

const History = () => {
  const [borrowedBooks, setBorrowedBooks] = useState<IBorrowedBooks[]>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getBorrowedBooks();

      setBorrowedBooks(res.payload.datas);
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
            <p className="text-[20px] font-semibold">Book List</p>
            <p className="text-[14px] font-medium text-slate-600">
              Manage books in Library
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
                      <TableCell>{borrowedBook.user.full_name}</TableCell>
                      <TableCell>{borrowedBook.book.title}</TableCell>
                      <TableCell>{borrowedBook.borrow_date.split('T')[0]}</TableCell>
                      <TableCell>{borrowedBook.due_date.split('T')[0]}</TableCell>
                      <TableCell>{borrowedBook.return_date?.split('T')[0]}</TableCell>
                      <TableCell className="text-right">
                        <EditBookDialog
                          key={borrowedBook.id}
                          data={borrowedBook}
                        />
                      </TableCell>
                      <TableCell className="text-right">
                        <DeleteBookDialog key={borrowedBook.id} />
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
