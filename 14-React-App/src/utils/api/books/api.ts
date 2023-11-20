import { Response, PayloadPagination } from "@/utils/types/types";
import { IBook, IEditBook } from ".";
import axiosWithConfig from "../axiosWithConfig";
import { AxiosError } from "axios";

export const getBooks = async (sort?: string) => {
  try {
    const res = await axiosWithConfig.get(
      `https://hells-kitchen.onrender.com/api/v1/books?sort=${sort}`,
    );

    return res.data as Response<PayloadPagination<IBook[]>>;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw Error(error.response?.data.message);
    }
  }
};

export const getBooksForHomePage = async () => {
  try {
    const res = await axiosWithConfig.get(
      "https://hells-kitchen.onrender.com/api/v1/books?limit=4",
    );

    return res.data as Response<PayloadPagination<IBook[]>>;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw Error(error.response?.data.message);
    }
  }
};

export const getNewBooks = async () => {
  try {
    const res = await axiosWithConfig.get(
      "https://hells-kitchen.onrender.com/api/v1/books?sort=New&limit=4",
    );

    return res.data as Response<PayloadPagination<IBook[]>>;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw Error(error.response?.data.message);
    }
  }
};

export const getDetailBook = async (id: string | undefined) => {
  try {
    const res = await axiosWithConfig.get(
      `https://hells-kitchen.onrender.com/api/v1/books/${id}`,
    );

    return res.data as Response<IBook>;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw Error(error.response?.data.message);
    }
  }
};

export const updateBookData = async (id: string, body: IEditBook) => {
  try {
    const res = await axiosWithConfig.put(
      `https://hells-kitchen.onrender.com/api/v1/books/${id}`,
      body,
    );

    return res.data as Response;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw Error(error.response?.data.message);
    }
  }
};
