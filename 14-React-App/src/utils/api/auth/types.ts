export interface IRegisterUser {
  full_name: string;
  email: string;
  password: string;
  role: string;
  address: string;
  phone_number: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}
