import { useEffect, useState } from "react";
import heroImg from "../../assets/img//will-van-wingerden-dsvJgiBJTOs-unsplash.jpg";
import { getBooks } from "@/utils/api/books/api";
import { IBook } from "@/utils/api/books";
import BookCard from "@/components/BookCard";
import { NavLink } from "react-router-dom";

const Home = () => {
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

  const [books, setBooks] = useState<IBook[]>([]);

  return (
    <div className="container min-h-screen">
      <div className="relative mb-9 mt-5 flex h-[400px] w-full items-center justify-between">
        <div className="h-full w-full">
          <img
            src={heroImg}
            alt="books"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
          <div className="rounded-md bg-primary-black/90 p-5">
            <p className="text-[40px] font-bold leading-10 text-white">
              Welcome to E-<span className="text-secondary-green">Library</span>
            </p>
            <p className="text-slate-500">
              Feel free to read and borrow your favorite books
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="mb-3 flex justify-between">
          <p>Recommended for you</p>
          <NavLink to="/books" className="underline">
            More &#8594;
          </NavLink>
        </div>

        <div className="mb-7 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {books.map((book) => {
            return <BookCard key={book.id} data={book} />;
          })}
        </div>

        <div className=" mb-3 flex justify-between">
          <p>New Release Book</p>
          <a href="./" className="underline">
            More &#8594;
          </a>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {books.map((book) => {
            return <BookCard key={book.id} data={book} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
