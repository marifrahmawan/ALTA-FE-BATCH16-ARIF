import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ModeToggle } from "@/components/ModeToggle";
import { Toaster } from "@/components/ui/toaster";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

import loginBg from "../../assets/img/pawel-czerwinski-BAiRfbt1HRE-unsplash.jpg";

const AuthLayout = () => {
  return (
    <div className="relative flex min-h-screen w-full px-8 dark:bg-primary-black lg:px-0">
      <div className="absolute right-5 top-5">
        <ModeToggle />
      </div>
      <div className="hidden min-h-screen w-1/2 lg:flex">
        <img
          src={loginBg}
          alt="bookshelf"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="min-h-screen w-full lg:w-1/2">
        <div className="flex h-full w-full justify-center pt-16 lg:pt-24">
          <div className="h-fit w-[450px]">
            <Tabs defaultValue={window.location.pathname} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="/signin">Sign In</TabsTrigger>
                <TabsTrigger value="/signup">Sign Up</TabsTrigger>
              </TabsList>
              <TabsContent value="/signin">
                <SignIn />
              </TabsContent>

              <TabsContent value="/signup">
                <SignUp />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default AuthLayout;
