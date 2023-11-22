import { AxiosError } from "axios";
import { ILoginUser, IRegisterUser } from ".";
import axiosWithConfig from "../axiosWithConfig";
import { Response } from "@/utils/types/types";

export const registerUser = async (body: IRegisterUser) => {
  try {
    const res = await axiosWithConfig.post(
      "/register",
      body,
    );

    return res.data as Response;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw Error(error.response?.data.message);
    }
  }
};

export const loginUser = async (body: ILoginUser) => {
  try {
    const res = await axiosWithConfig.post(
      "/login",
      body,
    );

    return res.data as Response<{ token: string }>;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw Error(error.response?.data.message);
    }
  }
};
