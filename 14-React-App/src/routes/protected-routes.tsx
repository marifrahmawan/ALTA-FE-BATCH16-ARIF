import { useToken } from "@/utils/contexts/token";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
  const { pathname } = useLocation();

  const { token, user } = useToken();

  const authProtected = ["/signin", "/signup"];
  const tokenProtected = ["/profile", "/book-list", "/user-history"];
  const roleProtected = ["/book-list", "/user-history"];

  if (authProtected.includes(pathname)) {
    if (token) {
      return <Navigate to={"/"} />;
    }
  }

  if (tokenProtected.includes(pathname)) {
    if (!token) {
      return <Navigate to={"/"} />;
    }

    if (roleProtected.includes(pathname)) {
      if (user.role === "user") {
        return <Navigate to={"/"} />;
      }
    }
  }

  return <Outlet />;
};

export default ProtectedRoutes;
