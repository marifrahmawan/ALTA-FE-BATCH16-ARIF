import { PayloadPagination, Response } from "@/utils/types/types";
import axiosWithConfig from "../axiosWithConfig";
import { IAddBorrowBooks, IBorrowedBooks, IEditBorrowBook } from ".";
import { AxiosError } from "axios";

export const getBorrowedBooks = async () => {
  try {
    const res = await axiosWithConfig.get(`/borrows`);

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
    const res = await axiosWithConfig.put(`/borrows/${id_borrow}`, body);

    return res.data as Response;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw Error(error.response?.data.message);
    }
  }
};

export const createBorrowBooks = async (body: IAddBorrowBooks) => {
  try {
    const res = await axiosWithConfig.post("/borrows", body);

    return res.data as Response;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw Error(error.response?.data.message);
    }
  }
};

export const deleteBorrowBook = async (id: string) => {
  try {
    const res = await axiosWithConfig.delete(`/borrows/${id}`);

    return res.data as Response;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw Error(error.response?.data.message);
    }
  }
};
