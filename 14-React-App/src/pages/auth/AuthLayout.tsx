import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ModeToggle } from "@/components/ModeToggle";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

import loginBg from "../../assets/img/pawel-czerwinski-BAiRfbt1HRE-unsplash.jpg";

const AuthLayout = () => {
  return (
    <div className="dark:bg-primary-black relative flex h-screen w-full px-8 lg:px-0">
      <div className="absolute right-5 top-5">
        <ModeToggle />
      </div>
      <div className="hidden h-full w-1/2 lg:block">
        <img
          src={loginBg}
          alt="bookshelf"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="h-full w-full lg:w-1/2">
        <div className="flex h-screen w-full items-center justify-center">
          <div className="h-fit w-[450px]">
            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              <TabsContent value="signin">
                <SignIn />
              </TabsContent>

              <TabsContent value="signup">
                <SignUp />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
