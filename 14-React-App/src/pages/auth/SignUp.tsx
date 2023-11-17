import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ToastAction } from "@radix-ui/react-toast";
import { useToast } from "@/components/ui/use-toast";

import GoogleIcon from "@/components/ui/GoogleIcon";
import { EyeIcon, EyeOffIcon, GithubIcon } from "lucide-react";


import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormField from "@/components/CustomFormField";
import { registerUser, IRegisterUser, registerSchema } from "@/utils/api/auth";

const SignUp = () => {
  const { toast } = useToast();
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const registerHandler = async (values: IRegisterUser) => {
    try {
      const res = await registerUser(values);

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
  };

  const form = useForm<IRegisterUser>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      repassword: "",
      address: "",
      phone_number: "",
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Don't have an account yet?</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(registerHandler)}>
            <div className="mb-6 grid gap-5">
              <CustomFormField
                id="full_name"
                name="full_name"
                label="Full Name"
                control={form.control}
              >
                {(field) => (
                  <Input
                    id="full_name"
                    placeholder="Full Name"
                    type="text"
                    autoComplete="on"
                    {...field}
                  />
                )}
              </CustomFormField>

              <CustomFormField
                id="email"
                name="email"
                label="Email"
                control={form.control}
              >
                {(field) => (
                  <Input
                    id="email"
                    placeholder="Email"
                    type="email"
                    autoComplete="on"
                    {...field}
                  />
                )}
              </CustomFormField>

              <div className="flex items-start gap-2">
                <CustomFormField
                  id="password"
                  name="password"
                  label="Password"
                  control={form.control}
                >
                  {(field) => (
                    <Input
                      id="password"
                      placeholder="Password"
                      type={showPass ? "text" : "password"}
                      {...field}
                    />
                  )}
                </CustomFormField>
                <CustomFormField
                  id="repassword"
                  name="repassword"
                  label="Re-Password"
                  control={form.control}
                >
                  {(field) => (
                    <div className="flex items-center">
                      <Input
                        id="repassword"
                        placeholder="Re-Password"
                        type={showPass ? "text" : "password"}
                        {...field}
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
                  )}
                </CustomFormField>
              </div>

              <CustomFormField
                id="address"
                name="address"
                label="Address"
                control={form.control}
              >
                {(field) => (
                  <Textarea id="address" placeholder="Address" {...field} />
                )}
              </CustomFormField>

              <CustomFormField
                id="phone_number"
                name="phone_number"
                label="Phone Number"
                control={form.control}
              >
                {(field) => (
                  <Input
                    id="phone_number"
                    placeholder="Phone Number"
                    type="tel"
                    autoComplete="on"
                    {...field}
                  />
                )}
              </CustomFormField>

              <Button type="submit">Sign Up</Button>
            </div>
          </form>
        </Form>
        {/* <form onSubmit={registerHandler}>
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
        </form> */}
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
