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
                name="full_name"
                label="Full Name"
                control={form.control}
              >
                {(field) => (
                  <Input
                    placeholder="Full Name"
                    type="text"
                    autoComplete="on"
                    {...field}
                  />
                )}
              </CustomFormField>

              <CustomFormField
                name="email"
                label="Email"
                control={form.control}
              >
                {(field) => (
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="on"
                    {...field}
                  />
                )}
              </CustomFormField>

              <div className="flex items-start gap-2">
                <CustomFormField
                  name="password"
                  label="Password"
                  control={form.control}
                >
                  {(field) => (
                    <Input
                      placeholder="Password"
                      type={showPass ? "text" : "password"}
                      {...field}
                    />
                  )}
                </CustomFormField>
                <CustomFormField
                  name="repassword"
                  label="Re-Password"
                  control={form.control}
                >
                  {(field) => (
                    <div className="flex items-center">
                      <Input
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
                name="address"
                label="Address"
                control={form.control}
              >
                {(field) => <Textarea placeholder="Address" {...field} />}
              </CustomFormField>

              <CustomFormField
                name="phone_number"
                label="Phone Number"
                control={form.control}
              >
                {(field) => (
                  <Input
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
