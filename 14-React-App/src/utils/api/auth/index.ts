import { registerUser, loginUser } from "./api";
import {
  IRegisterUser,
  ILoginUser,
  loginSchema,
  registerSchema,
} from "./types";

export { registerUser, loginUser, loginSchema, registerSchema };
export type { IRegisterUser, ILoginUser };
