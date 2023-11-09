import { Response, PayloadPagination } from "@/utils/types/types";
import { IBook, booksSampleData } from ".";

export const getBooks = async () => {
  return new Promise<Response<PayloadPagination<IBook[]>>>((resolve) => {
    setTimeout(() => {
      const response = {
        message: "",
        payload: {
          totalItems: 3,
          datas: booksSampleData,
          totalPages: 1,
          currentPage: 1,
        },
      };

      resolve(response);
    }, 1000);
  });
};
