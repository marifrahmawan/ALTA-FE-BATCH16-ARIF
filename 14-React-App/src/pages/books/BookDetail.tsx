import { Card, CardContent } from "@/components/ui/card";
import { booksSampleData } from "@/utils/api/books";
import { Badge } from "@/components/ui/badge";

import { NavLink, useParams } from "react-router-dom";

const BookDetail = () => {
  const bookId = useParams();

  return (
    <div className="container h-full w-full">
      <div className="flex w-full gap-20">
        <div className="h-[430px]">
          <Card className="w-p-2 h-full w-[300px] shadow-lg shadow-slate-400">
            <CardContent className="h-full w-full p-2">
              <div className="h-full">
                <img
                  src={booksSampleData[Number(bookId.id) - 1].cover_image}
                  alt={booksSampleData[Number(bookId.id) - 1].title}
                  className="h-full w-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <p className="text-[30px] font-medium">
            {booksSampleData[Number(bookId.id) - 1].title} -{" "}
            {booksSampleData[Number(bookId.id) - 1].author}
          </p>
          <p className="mb-1 text-slate-500">
            {booksSampleData[Number(bookId.id) - 1].isbn}
          </p>
          <NavLink to="/">
            <Badge>{booksSampleData[Number(bookId.id) - 1].category}</Badge>
          </NavLink>
          <p className="mt-7 w-[70%] text-justify">
            {booksSampleData[Number(bookId.id) - 1].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
