import { Response } from "@/utils/types/types";
import axiosWithConfig from "../axiosWithConfig";
import { IProfile } from ".";
import { AxiosError } from "axios";

export const getUserData = async () => {
  try {
    const res = await axiosWithConfig.get(
      "https://hells-kitchen.onrender.com/api/v1/users",
    );

    return res.data as Response<IProfile>;
  } catch (error) {
    console.log(error);
    if (error instanceof AxiosError) {
      throw Error(error.response?.data.message);
    }
  }
};
