import { PayloadPagination, Response } from "@/utils/types/types";
import axiosWithConfig from "../axiosWithConfig";
import { IBorrowedBooks } from ".";

export const getBorrowedBooks = async () => {
  try {
    const res = await axiosWithConfig.get(
      `https://hells-kitchen.onrender.com/api/v1/borrows`,
    );

    return res.data as Response<PayloadPagination<IBorrowedBooks[]>>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
