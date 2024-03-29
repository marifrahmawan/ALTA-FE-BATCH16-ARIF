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
import { Computer, Moon, ShoppingBasket, Sun } from "lucide-react";
import SearchBox from "./SearchBox";
import { NavLink, useNavigate } from "react-router-dom";
import { useToken } from "@/utils/contexts/token";
import useCartStore from "@/utils/store/cart";

const Navbar = () => {
  const { setTheme } = useTheme();
  const { token, user, changeToken } = useToken();
  const navigate = useNavigate();

  const openCart = useCartStore((state) => state.showCartHandler);
  const cart = useCartStore((state) => state.cart);

  return (
    <header className="sticky left-0 top-0 z-10  mb-5 h-16 w-full bg-white dark:bg-primary-black">
      <div className="container flex h-full items-center justify-between">
        <NavLink to="/" className="dark:text-white">
          <p className="text-[20px] font-semibold leading-4">
            E-<span className="text-secondary-green">Library</span>
          </p>
          <p className="text-[12px] font-medium">Your book partners</p>
        </NavLink>

        <div className="flex items-center gap-6">
          <SearchBox placeholder="Search Books" />
          {token && user.role === "user" && (
            <div className="relative h-full">
              <ShoppingBasket
                className=" h-7 w-7 hover:cursor-pointer"
                onClick={() => openCart()}
              />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary-black text-[10px] text-white dark:bg-white dark:text-primary-black">
                {cart.length}
              </span>
            </div>
          )}
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
                  {user.role === "user" && (
                    <NavLink to="/my-books" className="w-full">
                      <DropdownMenuItem className="hover:cursor-pointer">
                        My Books
                      </DropdownMenuItem>
                    </NavLink>
                  )}
                  {user.role === "admin" && (
                    <>
                      <NavLink to="/book-list" className="w-full">
                        <DropdownMenuItem className="hover:cursor-pointer">
                          Book List
                        </DropdownMenuItem>
                      </NavLink>
                      <NavLink to="/user-history" className="w-full">
                        <DropdownMenuItem className="hover:cursor-pointer">
                          User History
                        </DropdownMenuItem>
                      </NavLink>
                    </>
                  )}
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
                    onClick={() => {
                      changeToken("");
                      return navigate("/");
                    }}
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
