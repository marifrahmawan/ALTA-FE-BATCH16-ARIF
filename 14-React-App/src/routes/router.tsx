import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/home/Home";
import AuthLayout from "@/pages/auth/AuthLayout";
import Book from "@/pages/books/Book";
import BookDetail from "@/pages/books/BookDetail";
import Profile from "@/pages/dashboard/Profile";
import ListBook from "@/pages/dashboard/ListBook";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "books",
        children: [
          {
            index: true,
            element: <Book />,
          },
          {
            path: ":id",
            element: <BookDetail />,
          },
        ],
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "book-list",
        element: <ListBook />,
      },
    ],
  },
  {
    path: "/signin",
    element: <AuthLayout />,
  },
  {
    path: "/signup",
    element: <AuthLayout />,
  },
]);
