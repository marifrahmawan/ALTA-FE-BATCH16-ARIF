import { FormEvent, useState } from "react";

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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { registerUser } from "@/utils/api/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { toast } = useToast();
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const registerHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const body = {
        full_name: fullName,
        email,
        password,
        address,
        role: "user",
        phone_number: phoneNumber,
      };

      const res = await registerUser(body);

      toast({
        title: "Thank you !",
        description: res?.message,
      });

      navigate("/signin");

      setTimeout(() => {
        return window.location.reload();
      }, 3000);
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

    setFullName("");
    setEmail("");
    setPassword("");
    setAddress("");
    setPhoneNumber("");
  };

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Don't have an account yet?</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={registerHandler}>
          <div className="mb-6 grid gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                placeholder="Full Name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="Email"
                type="email"
                autoComplete="on"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Password</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="password"
                  placeholder="Password"
                  value={password}
                  type={showPass ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                  id="confirmPassword"
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
            <div className="flex flex-col gap-2">
              <Label htmlFor="address">Addres</Label>
              <Textarea
                id="address"
                placeholder="Address"
                autoComplete="off"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></Textarea>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                placeholder="Phone Number"
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <Button type="submit">Sign Up</Button>
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
