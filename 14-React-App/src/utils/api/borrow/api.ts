import { PayloadPagination, Response } from "@/utils/types/types";
import axiosWithConfig from "../axiosWithConfig";
import { IBorrowedBooks, IEditBorrowBook } from ".";
import { AxiosError } from "axios";

export const getBorrowedBooks = async () => {
  try {
    const res = await axiosWithConfig.get(
      `https://hells-kitchen.onrender.com/api/v1/borrows`,
    );

    return res.data as Response<PayloadPagination<IBorrowedBooks[]>>;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw Error(error.response?.data.message);
    }
  }
};

export const editBorrowedBook = async (
  id_borrow: number,
  body: IEditBorrowBook,
) => {
  try {
    const res = await axiosWithConfig.put(
      `https://hells-kitchen.onrender.com/api/v1/borrows/${id_borrow}`,
      body,
    );
    
    return res.data as Response;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw Error(error.response?.data.message);
    }
  }
};
