import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { deleteBookData } from "@/utils/api/books";
import { deleteBorrowBook } from "@/utils/api/borrow";

interface IProps {
  id: string;
  status: string;
}

const DeleteBookDialog = (props: IProps) => {
  const { id, status } = props;
  const [openDialog, setOpenDialog] = useState(false);

  const deleteBookHandler = async () => {
    try {
      const res = await deleteBookData(id);

      setOpenDialog(!openDialog);
      toast({ description: res?.message });
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Oops! Something went wrong.",
          description: error.toString(),
          variant: "destructive",
        });
      }
    }
  };

  const deleteBorrowHandler = async () => {
    try {
      const res = await deleteBorrowBook(id);

      setOpenDialog(!openDialog);
      toast({ description: res?.message });
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Oops! Something went wrong.",
          description: error.toString(),
          variant: "destructive",
        });
      }
    }
  };

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger>
        <Trash2 className="stroke-red-400" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="dark:text-white">Are you sure?</DialogTitle>
          <DialogDescription className="text-red-400">
            This action cannot be undone. This will permanently delete and
            remove book data from our servers.
          </DialogDescription>
          <div className="w-full">
            <Button
              className="mt-3 w-full bg-red-400 text-black hover:bg-red-500 dark:bg-red-400 dark:hover:bg-red-500"
              onClick={() => {
                status === "deleteBook"
                  ? deleteBookHandler()
                  : deleteBorrowHandler();
              }}
            >
              Delete
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteBookDialog;
