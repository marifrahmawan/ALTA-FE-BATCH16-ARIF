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
import { Button } from "@/components/ui/button";
import { EyeIcon, EyeOffIcon, GithubIcon } from "lucide-react";

import GoogleIcon from "@/components/ui/GoogleIcon";

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>
          <p>Don't have an account yet?</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="mb-6 grid gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input placeholder="Email" type="email" />
            </div>
            <div className="mb-6 flex flex-col gap-2">
              <Label htmlFor="password">Password</Label>
              <div className="flex items-center gap-1">
                <Input
                  placeholder="Password"
                  type={showPass ? "text" : "password"}
                />
                <Input
                  placeholder="Confirm Password"
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
        <div className="relative mb-5">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="text-muted-foreground bg-white px-2 dark:bg-[#020617]">
              Or Create With
            </span>
          </div>
        </div>
        <div className="mb-4 flex w-full justify-center gap-5">
          <Button>
            <GithubIcon className="mr-2 h-4 w-4" /> Github
          </Button>
          <Button>
            <GoogleIcon className="mr-2 h-4 w-4" /> Google
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignUp;
