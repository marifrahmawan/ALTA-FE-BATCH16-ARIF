import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

import SideBar from "../../components/SideBar";
import { Textarea } from "@/components/ui/textarea";

import {
  IEditUserProfile,
  IProfile,
  editUserProfileSchema,
  getUserData,
  updateUserProfile,
} from "@/utils/api/users";

import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

import DashboardTitle from "./DashboardTitle";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormField from "@/components/CustomFormField";
import ProfileDelete from "./ProfileDelete";

const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [profileData, setProfileData] = useState<IProfile>();

  const { toast } = useToast();

  useEffect(() => {
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
    fetchProfileData();
  }, [toast]);

  const updateProfileHandler = async (values: IEditUserProfile) => {
    try {
      const formData = new FormData();
      formData.append("full_name", values.full_name);
      formData.append("email", values.email);
      formData.append("password", values.password as string);
      formData.append("address", values.address);
      formData.append("phone_number", values.phone_number);
      formData.append("profile_picture", values.profile_picture[0]);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res = await updateUserProfile(formData as any);

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

  const form = useForm<IEditUserProfile>({
    resolver: zodResolver(editUserProfileSchema),
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      repassword: "",
      address: "",
      phone_number: "",
      profile_picture: "",
    },
    values: {
      full_name: profileData ? profileData.full_name : "",
      email: profileData ? profileData.email : "",
      address: profileData ? profileData.address : "",
      phone_number: profileData ? profileData.phone_number : "",
      role: profileData ? profileData.role : "",
      profile_picture: "",
    },
  });

  const fileRef = form.register("profile_picture", { required: true });

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
                    name="full_name"
                    label="Full Name"
                    control={form.control}
                    description="This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days."
                  >
                    {(field) => (
                      <Input
                        className="mb-2 h-8 w-[250px] rounded-md"
                        placeholder="Full Name"
                        type="text"
                        {...field}
                      />
                    )}
                  </CustomFormField>

                  <CustomFormField
                    name="email"
                    label="Email"
                    control={form.control}
                    description="You can manage verified email addresses in your email settings."
                  >
                    {(field) => (
                      <Input
                        className="mb-2 h-8 w-[250px] rounded-md"
                        placeholder="Email"
                        type="email"
                        {...field}
                      />
                    )}
                  </CustomFormField>

                  <div className="flex gap-2">
                    <CustomFormField
                      name="password"
                      label="Password"
                      control={form.control}
                    >
                      {(field) => (
                        <Input
                          className="h-8 w-[250px] rounded-md"
                          placeholder="Password"
                          type={showPassword ? "text" : "password"}
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
                        <div className="flex gap-2">
                          <Input
                            className="h-8 w-[250px] rounded-md"
                            placeholder="Re-Password"
                            type={showPassword ? "text" : "password"}
                            {...field}
                          />
                          <span>
                            {showPassword ? (
                              <Eye
                                className="h-8 hover:cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                              />
                            ) : (
                              <EyeOff
                                className="h-8 hover:cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                              />
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
                    {(field) => <Textarea className="w-[510px]" {...field} />}
                  </CustomFormField>

                  <CustomFormField
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
                    name="profile_picture"
                    label="Profile Picture"
                    control={form.control}
                  >
                    {() => (
                      <Input
                        type="file"
                        className="mb-2 w-[250px] rounded-md"
                        accept="image/jpg, image/jpeg, image/png"
                        {...fileRef}
                      />
                    )}
                  </CustomFormField>

                  <div className="mt-5 flex gap-5">
                    <Button
                      type="submit"
                      className="w-[200px]"
                      disabled={form.formState.isSubmitting}
                      aria-disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                          Loading
                        </>
                      ) : (
                        "Update"
                      )}
                    </Button>
                    <span className="w-[200px]">
                      <ProfileDelete />
                    </span>
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
