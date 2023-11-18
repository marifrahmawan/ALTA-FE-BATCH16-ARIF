import { Response } from "@/utils/types/types";
import axiosWithConfig from "../axiosWithConfig";
import { IEditUserProfile, IProfile } from ".";
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

export const updateUserProfile = async (body: IEditUserProfile) => {
  try {
    const res = await axiosWithConfig.put(
      "https://hells-kitchen.onrender.com/api/v1/users",
      body,
    );

    return res.data as Response;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw Error(error.response?.data.message);
    }
  }
};
