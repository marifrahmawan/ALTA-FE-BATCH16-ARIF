import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/home/Home";
import AuthLayout from "@/pages/auth/AuthLayout";
import Book from "@/pages/books/Book";
import BookDetail from "@/pages/books/BookDetail";
import Profile from "@/pages/dashboard/Profile";
import ListBook from "@/pages/dashboard/ListBook";
import ProtectedRoutes from "./protected-routes";
import History from "@/pages/dashboard/History";
import MyBooks from "@/pages/dashboard/MyBooks";

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
    ],
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "book-list",
            element: <ListBook />,
          },
          {
            path: "user-history",
            element: <History />,
          },
          {
            path: "my-books",
            element: <MyBooks />,
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
    ],
  },
]);
