import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { EyeIcon, EyeOffIcon, GithubIcon,  } from "lucide-react";


import loginBg from "../../assets/img/pawel-czerwinski-BAiRfbt1HRE-unsplash.jpg";
import GoogleIcon from "@/components/ui/GoogleIcon";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="relative flex h-screen w-full dark:bg-[#020617] px-8 lg:px-0">
      <div className="absolute right-5 top-5">
        <ModeToggle />
      </div>
      <div className="hidden lg:block h-full w-1/2 bg-secondary-green">
        <img
          src={loginBg}
          alt="bookshelf"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="h-full w-full lg:w-1/2">
        <div className="flex h-screen w-full items-center justify-center">
          <div className="h-fit w-[400px]">
            <Card>
              <CardHeader>
                <CardTitle>Sign In</CardTitle>
                <CardDescription>
                  <p>
                    Don't have an account yet?{" "}
                    <a
                      href="./"
                      className="font-semibold text-secondary-green hover:underline"
                    >
                      Sign Up
                    </a>
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex w-full justify-center gap-5 mb-4">
                  <Button>
                    <GithubIcon className="mr-2 h-4 w-4" /> Github
                  </Button>
                  <Button>
                    <GoogleIcon className="mr-2 h-4 w-4" /> Google
                  </Button>
                </div>
                <div className="relative mb-5">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="text-muted-foreground bg-white px-2 dark:bg-[#020617]">
                      Or continue with
                    </span>
                  </div>
                </div>
                <form>
                  <div className="grid gap-5">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input placeholder="Email" type="email" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="flex items-center">
                        <Input
                          placeholder="Password"
                          type={showPass ? "text" : "password"}
                        />
                        <span
                          className="h-full px-1 hover:cursor-pointer dark:border-slate-800"
                          onClick={() => setShowPass(!showPass)}
                        >
                          {showPass ? (
                            <EyeIcon className="h-full" />
                          ) : (
                            <EyeOffIcon className="h-full" />
                          )}
                        </span>
                      </div>
                    </div>
                    <Button>Login</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
