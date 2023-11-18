import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { useToast } from "@/components/ui/use-toast";

import axiosWithConfig, { setAxiosConfig } from "@/utils/api/axiosWithConfig";

import { IProfile, getUserData } from "@/utils/api/users";

interface IContext {
  token: string;
  user: Partial<IProfile>;
  changeToken: (token?: string) => void;
}

interface IProps {
  children: ReactNode;
}

const contextValue = {
  token: "",
  user: {},
  changeToken: () => {},
};

const tokenContext = createContext<IContext>(contextValue);

export const TokenProvider = ({ children }: Readonly<IProps>) => {
  const { toast } = useToast();

  const [token, setToken] = useState(localStorage.getItem("getItem") ?? "");
  const [user, setUser] = useState<Partial<IProfile>>({});

  useEffect(() => {
    setAxiosConfig(token);
    token !== "" && fetchUserProfile();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  axiosWithConfig.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        changeToken("");
      }

      return Promise.reject(error);
    },
  );

  const fetchUserProfile = useCallback(async () => {
    try {
      const res = await getUserData();
      setUser(res!.payload);
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Oops! Something went Wrong.",
          description: error.message.toString(),
          variant: "destructive",
        });
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, toast]);

  const changeToken = useCallback(
    (token?: string) => {
      const newToken = token ?? "";
      setToken(newToken);

      if (token) {
        localStorage.setItem("token", token);
      } else {
        localStorage.removeItem("token");
        setUser({});
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [token],
  );

  const tokenContextValue = useMemo(
    () => ({
      token,
      user,
      changeToken,
    }),
    [token, user, changeToken],
  );

  return (
    <tokenContext.Provider value={tokenContextValue}>
      {children}
    </tokenContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useToken = () => {
  const context = useContext(tokenContext);

  if (context === undefined) {
    throw new Error("Error, useToken must be used within TokenContext");
  }

  return context;
};
