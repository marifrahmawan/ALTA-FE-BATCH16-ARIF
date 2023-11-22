import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../../components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { deleteUserProfile } from "@/utils/api/users";
import { useNavigate } from "react-router-dom";
import { useToken } from "@/utils/contexts/token";

const ProfileDelete = () => {
  const navigate = useNavigate();
  const { changeToken } = useToken();

  const deleteUserHandler = async () => {
    try {
      const res = await deleteUserProfile();

      return setTimeout(() => {
        toast({
          description: res?.message,
        });
        changeToken("");
        return navigate("/signin");
      }, 1500);
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Oops! Something went wrong",
          description: error.toString(),
          variant: "destructive",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <Button
          type="button"
          className="w-full bg-secondary-red dark:bg-secondary-red dark:text-white"
        >
          Delete Profile
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription className="text-red-400">
            This action cannot be undone. This will permanently delete and
            remove book data from our servers.
          </DialogDescription>
          <div className="w-full">
            <Button
              className="mt-3 w-full bg-red-400 text-black hover:bg-red-500 dark:bg-red-400 dark:hover:bg-red-500"
              onClick={() => deleteUserHandler()}
            >
              Delete
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileDelete;
