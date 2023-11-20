import { useEffect, useState } from "react";

import { format } from "date-fns";

import { IBorrowedBooks, getBorrowedBooks } from "@/utils/api/borrow";

import DashboardTitle from "./DashboardTitle";
import SideBar from "@/components/SideBar";

import { CalendarCheck, CalendarClock } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

const MyBooks = () => {
  const [myBooks, setMyBooks] = useState<IBorrowedBooks[]>([]);

  useEffect(() => {
    const fetchMyBooksData = async () => {
      try {
        const res = await getBorrowedBooks();
        setMyBooks(res!.payload.datas);
      } catch (error) {
        if (error instanceof Error) {
          toast({
            title: "Error",
            description: "Oops! Something went Wrong!",
            variant: "destructive",
          });
        }
      }
    };

    fetchMyBooksData();
  }, []);

  return (
    <div className="container">
      <DashboardTitle />
      <div className="flex h-full w-full ">
        <SideBar />

        <div className="flex grow flex-col">
          <div className="mb-9 w-full border-b pb-5">
            <p className="text-[20px] font-semibold">My Books</p>
            <p className="text-[14px] font-medium text-slate-600">
              Manage your borrowed books.
            </p>
          </div>
          <div className="flex flex-col">
            {myBooks.map((myBook) => (
              <div
                className="mb-5 flex w-full gap-6 border-b pb-5"
                key={myBook.id}
              >
                <div className="h-[200px] min-w-[130px] overflow-hidden rounded-md shadow-lg">
                  <img
                    src={myBook.book.cover_image}
                    alt="test"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-[20px] font-semibold">
                    {myBook.book.title}
                  </p>
                  <p className="mt-4 text-[14px] font-medium">Borrow Date</p>
                  <Button
                    className="flex justify-start gap-3 bg-transparent p-0 text-[12px] text-black"
                    disabled
                  >
                    <CalendarClock />{" "}
                    {format(new Date(myBook.borrow_date), "PPPP")}
                  </Button>
                  <p className="text-[14px] font-medium">Due Date</p>
                  <Button
                    className="flex justify-start gap-3 bg-transparent p-0 text-[12px] text-black"
                    disabled
                  >
                    <CalendarCheck />{" "}
                    {format(new Date(myBook.due_date), "PPPP")}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBooks;
