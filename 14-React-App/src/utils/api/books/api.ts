import { Response, PayloadPagination, Request } from "@/utils/types/types";
import { IAddBook, IBook, IEditBook } from ".";
import axiosWithConfig from "../axiosWithConfig";
import { AxiosError } from "axios";

export const getBooks = async (params?: Request) => {
  try {
    let query = "";

    if (params) {
      const queryParams: string[] = [];

      let key: keyof typeof params;

      for (key in params) {
        queryParams.push(`${key}=${params[key]}`);
      }

      query = queryParams.join("&");
    }
    const url = query ? `/books?${query}&limit=8` : "/books?limit=8";
    const res = await axiosWithConfig.get(url);

    return res.data as Response<PayloadPagination<IBook[]>>;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw Error(error.response?.data.message);
    }
  }
};

export const getBooksForHomePage = async () => {
  try {
    const res = await axiosWithConfig.get("/books?limit=4");

    return res.data as Response<PayloadPagination<IBook[]>>;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw Error(error.response?.data.message);
    }
  }
};

export const getNewBooks = async () => {
  try {
    const res = await axiosWithConfig.get("/books?sort=New&limit=4");

    return res.data as Response<PayloadPagination<IBook[]>>;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw Error(error.response?.data.message);
    }
  }
};

export const getDetailBook = async (id: string | undefined) => {
  try {
    const res = await axiosWithConfig.get(`/books/${id}`);

    return res.data as Response<IBook>;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw Error(error.response?.data.message);
    }
  }
};

export const createBookData = async (body: IAddBook) => {
  try {
    const res = await axiosWithConfig.post("/books", body);

    return res.data as Response;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw Error(error.response?.data.message);
    }
  }
};

export const updateBookData = async (id: string, body: IEditBook) => {
  try {
    const res = await axiosWithConfig.put(`/books/${id}`, body);

    return res.data as Response;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw Error(error.response?.data.message);
    }
  }
};

export const deleteBookData = async (id: string) => {
  try {
    const res = await axiosWithConfig.delete(`/books/${id}`);

    return res.data as Response;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw Error(error.response?.data.message);
    }
  }
};
