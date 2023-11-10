import { Response, PayloadPagination } from "@/utils/types/types";
import { IBook } from ".";
import axiosWithConfig from "../axiosWithConfig";

export const getBooks = async () => {
  try {
    const res = await axiosWithConfig.get(
      "https://hells-kitchen.onrender.com/api/v1/books",
    );

    return res.data as Response<PayloadPagination<IBook[]>>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getBooksForHomePage = async () => {
  try {
    const res = await axiosWithConfig.get(
      "https://hells-kitchen.onrender.com/api/v1/books?limit=4",
    );

    return res.data as Response<PayloadPagination<IBook[]>>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getDetailBook = async (id: string | undefined) => {
  try {
    const res = await axiosWithConfig.get(
      `https://hells-kitchen.onrender.com/api/v1/books/${id}`,
    );

    return res.data as Response<IBook>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
