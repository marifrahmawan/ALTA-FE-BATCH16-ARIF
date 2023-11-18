import { IProfile, editUserProfileSchema, IEditUserProfile } from "./types";
import { getUserData, updateUserProfile } from "./api";

export { getUserData, updateUserProfile, editUserProfileSchema };
export type { IProfile, IEditUserProfile };
