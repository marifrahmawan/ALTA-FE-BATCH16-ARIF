import { IBook } from "@/utils/api/books";
import { Card } from "./ui/card";
import { NavLink } from "react-router-dom";

interface IProps {
  data: IBook;
}

const BookCard = (props: IProps) => {
  const { data } = props;

  return (
    <NavLink to={`/books/${data.id}`}>
      <Card className="col-auto mb-3 h-fit p-3 shadow-md shadow-slate-500">
        <div className="h-[200px] w-full md:h-[300px] lg:h-[300px] xl:h-[400px]">
          <img
            src={data.cover_image}
            alt={data.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-3">
          <p className="max-h-14 truncate text-[14px] font-semibold lg:text-[18px] ">
            {data.title}
          </p>
          <div className="gap1 mt-4 flex flex-col text-[12px] text-slate-500 lg:text-[14px]">
            <div className="flex gap-2">
              <p>{data.author}</p>
            </div>
            <div className="flex gap-2">
              <p>{data.isbn}</p>
            </div>
          </div>
        </div>
      </Card>
    </NavLink>
  );
};

export default BookCard;
