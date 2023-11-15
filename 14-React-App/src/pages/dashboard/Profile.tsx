import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Label } from "@radix-ui/react-label";
import SideBar from "../../components/SideBar";
import { Eye, EyeOff } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import DashboardTitle from "./DashboardTitle";
import { IProfile, getUserData } from "@/utils/api/users";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

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
            <div className="flex grow flex-col gap-5">
              <div className="flex w-full flex-col">
                <Label className="mb-1">Fullname</Label>
                <Input
                  type="text"
                  className="mb-2 h-8 w-[250px] rounded-md"
                  value={profileData?.full_name}
                />
                <p className="text-[12px]">
                  This is your public display name. It can be your real name or
                  a pseudonym. You can only change this once every 30 days.
                </p>
              </div>
              <div className="flex w-full flex-col">
                <Label className="mb-1">Email</Label>
                <Input
                  type="email"
                  className="mb-2 h-8 w-[250px] rounded-md"
                  value={profileData?.email}
                />
                <p className="text-[12px]">
                  You can manage verified email addresses in your email
                  settings.
                </p>
              </div>
              <div className="flex w-full flex-col">
                <Label className="mb-1">Password</Label>
                <div className="flex w-full items-center gap-2">
                  <Input
                    type={`${showPassword ? "text" : "password"}`}
                    placeholder="Password"
                    className="mb-2 h-8 w-[250px] rounded-md"
                  />
                  <Input
                    type={`${showPassword ? "text" : "password"}`}
                    placeholder="Re-enter Password"
                    className="mb-2 h-8 w-[250px] rounded-md"
                  />
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
                </div>
              </div>
              <div className="flex w-full flex-col">
                <Label className="mb-1">Address</Label>
                <Textarea className="w-[510px]" value={profileData?.address} />
              </div>
              <div className="flex w-full flex-col">
                <Label className="mb-1">Phone Number</Label>
                <Input
                  type="text"
                  className="mb-2 h-8 w-[250px] rounded-md"
                  value={profileData?.phone_number}
                />
                <p className="text-[12px]">
                  We need your phone number to activate two-factor
                  authentication.
                </p>
              </div>
              <div className="flex w-full flex-col">
                <Label className="mb-1">Picture</Label>
                <Input
                  type="file"
                  className="mb-2 w-[250px] rounded-md dark:bg-slate-700 dark:text-white"
                />
                <p className="text-[12px] ">
                  You can change your profile picture.
                </p>
              </div>

              <div className="flex w-[60%] gap-5">
                <Button className="w-[50%] grow">Update</Button>
                <Button className="w-[50%] grow bg-secondary-red dark:bg-secondary-red dark:text-white">
                  Delete Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
