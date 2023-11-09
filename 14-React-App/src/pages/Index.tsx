import { RouterProvider } from "react-router-dom";
import { router } from "../routes/router";

const Index = () => {
  return <RouterProvider router={router} />;
};

export default Index;
