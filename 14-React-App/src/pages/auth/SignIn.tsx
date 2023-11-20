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
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import CustomFormField from "@/components/CustomFormField";

import { EyeIcon, EyeOffIcon, GithubIcon, Loader2 } from "lucide-react";
import GoogleIcon from "@/components/ui/GoogleIcon";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ILoginUser, loginSchema, loginUser } from "@/utils/api/auth";
import { useToken } from "@/utils/contexts/token";

const SignIn = () => {
  const navigate = useNavigate();
  const { changeToken } = useToken();

  const [showPass, setShowPass] = useState(false);

  const loginHandler = async (values: ILoginUser) => {
    try {
      const res = await loginUser(values);
      changeToken(res?.payload.token);

      toast({
        title: "Thank you !",
        description: res?.message,
      });

      return navigate("/");
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

  const form = useForm<ILoginUser>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Enter your email and password</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(loginHandler)}>
            <div className="mb-6 grid gap-5">
              <CustomFormField
                control={form.control}
                name="email"
                label="Email Address"
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

              <CustomFormField
                control={form.control}
                name="password"
                label="Password"
              >
                {(field) => (
                  <div className="flex items-center gap-2">
                    <Input
                      placeholder="Password"
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
              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </div>
          </form>
        </Form>
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
