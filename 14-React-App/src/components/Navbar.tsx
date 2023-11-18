import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "@/utils/theme-provider";
import { Computer, Moon, Sun } from "lucide-react";
import { Input } from "./ui/input";
import { NavLink } from "react-router-dom";
import { useToken } from "@/utils/contexts/token";

const Navbar = () => {
  const { setTheme } = useTheme();
  const { token, user, changeToken } = useToken();

  return (
    <header className="sticky left-0 top-0 z-10  mb-5 h-16 w-full bg-white dark:bg-primary-black">
      <div className="container flex h-full items-center justify-between">
        <NavLink to="/" className="dark:text-white">
          <p className="text-[20px] font-semibold leading-4">
            E-<span className="text-secondary-green">Library</span>
          </p>
          <p className="text-[12px] font-medium">Your book partners</p>
        </NavLink>

        <div className="flex items-center gap-8">
          <Input
            className="h-8 rounded-sm dark:text-white"
            placeholder="Search Books"
          />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src={user.profile_picture} />
                <AvatarFallback>BQ</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52">
              {token && (
                <DropdownMenuLabel>Hi, {user.full_name}</DropdownMenuLabel>
              )}

              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <span>Theme</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                      <Sun className="mr-2 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90" />
                      <span>Light</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                      <Moon className="mr-2 h-[1.2rem] w-[1.2rem] transition-all dark:scale-100 dark:stroke-white" />
                      <span>Dark</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                      <Computer className="mr-2 h-[1.2rem] w-[1.2rem] transition-all dark:scale-100 dark:stroke-white" />
                      <span>System</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              {token && (
                <>
                  <NavLink to="/profile" className="w-full">
                    <DropdownMenuItem className="hover:cursor-pointer">
                      Profile
                    </DropdownMenuItem>
                  </NavLink>
                  <NavLink to="/book-list" className="w-full">
                    <DropdownMenuItem className="hover:cursor-pointer">
                      Book List
                    </DropdownMenuItem>
                  </NavLink>
                  <NavLink to="/history-borrow" className="w-full">
                    <DropdownMenuItem className="hover:cursor-pointer">
                      History Borrow
                    </DropdownMenuItem>
                  </NavLink>
                </>
              )}
              {!token ? (
                <>
                  <NavLink to="/signin" className="w-full">
                    <DropdownMenuItem className="hover:cursor-pointer">
                      Sign In
                    </DropdownMenuItem>
                  </NavLink>
                  <NavLink to="/signup" className="w-full">
                    <DropdownMenuItem className="hover:cursor-pointer">
                      Sign Up
                    </DropdownMenuItem>
                  </NavLink>
                </>
              ) : (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="hover:cursor-pointer"
                    onClick={() => changeToken("")}
                  >
                    Logout
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
