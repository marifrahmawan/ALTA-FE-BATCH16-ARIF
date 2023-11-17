import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Label } from "@radix-ui/react-label";
import SideBar from "../../components/SideBar";
import { Eye, EyeOff } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import DashboardTitle from "./DashboardTitle";
import { IProfile, getUserData, updateUserProfile } from "@/utils/api/users";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { IRegisterUser, registerSchema } from "@/utils/api/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormField from "@/components/CustomFormField";

const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [profileData, setProfileData] = useState<IProfile>();

  const { toast } = useToast();

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      const res = await getUserData();

      setProfileData(res?.payload);
    } catch (error) {
      console.log(error);
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

  const updateProfileHandler = async (values: IRegisterUser) => {
    try {
      const res = await updateUserProfile(values);

      toast({
        title: "Completed",
        description: res?.message,
      });
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
    values: {
      full_name: profileData ? profileData.full_name : "",
      email: profileData ? profileData.email : "",
      password: "",
      repassword: "",
      address: profileData ? profileData.address : "",
      phone_number: profileData ? profileData.phone_number : "",
      role: profileData ? profileData.role : "",
    },
  });

  return (
    <div className="container">
      <DashboardTitle />
      <div className="flex h-full w-full">
        <SideBar />

        <div className="flex grow flex-col">
          <div className="mb-9 w-full border-b pb-5">
            <p className="text-[20px] font-semibold">Profile</p>
            <p className="text-[14px] font-medium text-slate-600">
              This is how others will see you on the site.
            </p>
          </div>
          <div className="flex gap-10">
            <div className="h-32 w-32 overflow-hidden rounded-full ">
              <Avatar className="h-full w-full ">
                <AvatarImage
                  src={`${profileData?.profile_picture}`}
                  className="h-full w-full"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(updateProfileHandler)}>
                <div className="flex grow flex-col gap-5">
                  <CustomFormField
                    id="full_name"
                    name="full_name"
                    label="Full Name"
                    control={form.control}
                    description="This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days."
                  >
                    {(field) => (
                      <Input
                        id="full_name"
                        className="mb-2 h-8 w-[250px] rounded-md"
                        placeholder="Full Name"
                        type="text"
                        {...field}
                      />
                    )}
                  </CustomFormField>

                  <CustomFormField
                    id="email"
                    name="email"
                    label="Email"
                    control={form.control}
                    description="You can manage verified email addresses in your email settings."
                  >
                    {(field) => (
                      <Input
                        id="email"
                        className="mb-2 h-8 w-[250px] rounded-md"
                        placeholder="Email"
                        type="email"
                        {...field}
                      />
                    )}
                  </CustomFormField>

                  <div className="flex gap-2">
                    <CustomFormField
                      id="password"
                      name="password"
                      label="Password"
                      control={form.control}
                    >
                      {(field) => (
                        <Input
                          id="password"
                          className="mb-2 h-8 w-[250px] rounded-md"
                          placeholder="Password"
                          type={showPassword ? "text" : "password"}
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
                        <div className="flex gap-2">
                          <Input
                            id="repassword"
                            className="mb-2 h-8 w-[250px] rounded-md"
                            placeholder="Re-Password"
                            type={showPassword ? "text" : "password"}
                            {...field}
                          />
                          <span>
                            {showPassword ? (
                              <Eye
                                className="mb-2 h-8 hover:cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                              />
                            ) : (
                              <EyeOff
                                className="mb-2 h-8 hover:cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                              />
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
                    {(field) => <Textarea className="w-[510px]" {...field} />}
                  </CustomFormField>

                  <CustomFormField
                    id="phone_number"
                    name="phone_number"
                    label="Phone Number"
                    description=" We need your phone number to activate two-factor authentication."
                    control={form.control}
                  >
                    {(field) => (
                      <Input
                        type="text"
                        className="mb-2 h-8 w-[250px] rounded-md"
                        {...field}
                      />
                    )}
                  </CustomFormField>

                  <CustomFormField
                    id="profile_picture"
                    name=""
                    label="Profile Picture"
                    control={form.control}
                  >
                    {(field) => (
                      <Input
                        type="file"
                        className="mb-2 w-[250px] rounded-md"
                        {...field}
                      />
                    )}
                  </CustomFormField>

                  <div className="flex w-[60%] gap-5">
                    <Button type="submit" className="w-[50%] grow">
                      Update
                    </Button>
                    <Button className="w-[50%] grow bg-secondary-red dark:bg-secondary-red dark:text-white">
                      Delete Profile
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
