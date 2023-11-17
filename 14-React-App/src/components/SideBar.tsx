import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SideBar = () => {
  return (
    <div className="mr-5 min-w-[300px]">
      <Button className="h-8 w-full overflow-hidden bg-white p-0 text-black hover:bg-white hover:underline dark:bg-transparent dark:text-white dark:hover:bg-transparent rounded-none">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "flex h-full w-full items-center bg-neutral-700 pl-5 text-white"
              : "flex h-full w-full items-center bg-transparent pl-5"
          }
        >
          Profile
        </NavLink>
      </Button>

      <Button className="h-8 w-full overflow-hidden bg-white p-0 text-black hover:bg-white hover:underline dark:bg-transparent dark:text-white dark:hover:bg-transparent rounded-none">
        <NavLink
          to="/book-list"
          className={({ isActive }) =>
            isActive
              ? "flex h-full w-full items-center bg-neutral-700 pl-5 text-white"
              : "flex h-full w-full items-center bg-transparent pl-5"
          }
        >
          Book List
        </NavLink>
      </Button>

      <Button className="h-8 w-full overflow-hidden bg-white p-0 hover:bg-white hover:underline dark:bg-transparent dark:text-white dark:hover:bg-transparent rounded-none">
        <NavLink
          to="/history-borrow"
          className={({ isActive }) =>
            isActive
              ? "flex h-full w-full items-center bg-neutral-700 pl-5 text-white"
              : "flex h-full w-full items-center bg-transparent pl-5 text-black dark:text-white"
          }
        >
          History
        </NavLink>
      </Button>
    </div>
  );
};

export default SideBar;
