import { Card, CardContent } from "@/components/ui/card";
import { IBook, getDetailBook } from "@/utils/api/books";
import { Badge } from "@/components/ui/badge";

import { NavLink, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const BookDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDetailBook(id);
        setBook(result!.payload);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const [book, setBook] = useState<IBook>();

  return (
    <div className="container h-full w-full">
      <div className="flex w-full gap-20">
        <div className="h-[430px]">
          <Card className="w-p-2 h-full w-[300px] shadow-lg shadow-slate-400">
            <CardContent className="h-full w-full p-2">
              <div className="h-full">
                <img
                  src={book?.cover_image}
                  alt={book?.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[30px] font-medium">
            {book?.title} - {book?.author}
          </p>
          <p className="mb-1 text-slate-500">{book?.isbn}</p>
          <NavLink to="/">
            <Badge>{book?.category}</Badge>
          </NavLink>
          <p className="mb-12 mt-7 w-[70%] text-justify">{book?.description}</p>

          <Button className="w-[70%]">Borrow</Button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
