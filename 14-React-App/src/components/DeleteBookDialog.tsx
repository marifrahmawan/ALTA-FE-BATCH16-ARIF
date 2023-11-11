import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";

const DeleteBookDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Trash2 className="stroke-red-400" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription className="text-red-400">
            This action cannot be undone. This will permanently delete and
            remove book data from our servers.
          </DialogDescription>
          <div className="w-full">
            <Button className="mt-3 w-full bg-red-400 text-black hover:bg-red-500 dark:bg-red-400 dark:hover:bg-red-500">
              Delete
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteBookDialog;
