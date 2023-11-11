import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

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
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { loginUser } from "@/utils/api/auth/api";

import { EyeIcon, EyeOffIcon, GithubIcon } from "lucide-react";
import GoogleIcon from "@/components/ui/GoogleIcon";

const SignIn = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      email,
      password,
    };
    try {
      const res = await loginUser(body);

      toast({
        title: "Thank you !",
        description: res?.message,
      });

      setTimeout(() => {
        return navigate("/books");
      }, 2000);
    } catch (error) {
      if (error instanceof Error) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error.toString(),
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Enter your email and password</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={loginHandler}>
          <div className="mb-6 grid gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="Email"
                type="email"
                autoComplete="on"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6 flex flex-col gap-2">
              <Label htmlFor="password">Password</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="password"
                  placeholder="Password"
                  type={showPass ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
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
            <Button type="submit">Sign In</Button>
          </div>
        </form>
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

export default SignIn;
