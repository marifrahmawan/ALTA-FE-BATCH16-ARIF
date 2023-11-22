import { IProfile, editUserProfileSchema, IEditUserProfile } from "./types";
import { getUserData, updateUserProfile, deleteUserProfile } from "./api";

export {
  getUserData,
  updateUserProfile,
  editUserProfileSchema,
  deleteUserProfile,
};
export type { IProfile, IEditUserProfile };
