import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Label } from "@radix-ui/react-label";
import { NavLink } from "react-router-dom";

const Profile = () => {
  return (
    <div className="container">
      <div className="mb-10 w-full border-b border-slate-800 pb-3">
        <p className="text-[35px] font-semibold leading-none">Settings</p>
        <p className="font-medium text-slate-600">
          Manage your account settings and email preferences
        </p>
      </div>
      <div className="flex h-full w-full">
        <div className="mr-5 w-[300px]">
          <Button className="h-8 w-full overflow-hidden p-0  hover:underline dark:bg-transparent dark:text-white dark:hover:bg-transparent">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "flex h-full w-full items-center bg-neutral-700 pl-5"
                  : "flex h-full w-full items-center bg-transparent pl-5"
              }
            >
              Profile
            </NavLink>
          </Button>

          <Button className="h-8 w-full overflow-hidden bg-white p-0 text-black hover:bg-white hover:underline dark:bg-transparent dark:text-white dark:hover:bg-transparent">
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive
                  ? "flex h-full w-full items-center bg-neutral-700 pl-5"
                  : "flex h-full w-full items-center bg-transparent pl-5"
              }
            >
              Settings
            </NavLink>
          </Button>
        </div>
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
                  src="https://github.com/shadcn.png"
                  className="h-full w-full"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex grow flex-col gap-5">
              <div className="flex w-full flex-col">
                <Label className="mb-1">Username</Label>
                <Input type="text" className="mb-2 h-8 w-[250px] rounded-md" />
                <p className="text-[12px]">
                  This is your public display name. It can be your real name or
                  a pseudonym. You can only change this once every 30 days.
                </p>
              </div>
              <div className="flex w-full flex-col">
                <Label className="mb-1">Email</Label>
                <Input type="email" className="mb-2 h-8 w-[250px] rounded-md" />
                <p className="text-[12px]">
                  You can manage verified email addresses in your email
                  settings.
                </p>
              </div>
              <div className="flex w-full flex-col">
                <Label className="mb-1">Bio</Label>
                <Textarea className="mb-2 h-8 w-[450px] rounded-md" />
                <p className="text-[12px]">
                  You can @mention other users and organizations to link to
                  them.
                </p>
              </div>
              <div className="flex w-full flex-col">
                <Label className="mb-1">Picture</Label>
                <Input type="file" className="mb-2 w-[250px] rounded-md dark:text-white dark:bg-slate-700"  />
                <p className="text-[12px] ">
                  You can change your profile picture.
                </p>
              </div>

              <div className="flex w-[250px] flex-col">
                <Button>Update Profile</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
