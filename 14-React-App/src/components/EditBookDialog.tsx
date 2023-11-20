import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Pencil } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { IEditBook, updateBookData } from "@/utils/api/books";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editBookSchema } from "@/utils/api/books/types";
import { Form } from "./ui/form";
import CustomFormField from "./CustomFormField";
import { toast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";
import { useState } from "react";

interface IProps {
  data: IEditBook;
}

const EditBookDialog = (props: IProps) => {
  const { data } = props;
  const [openDialog, setOpenDialog] = useState(false);

  const editBookHandler = async (values: IEditBook) => {
    try {
      const res = await updateBookData(data.id.toString(), values);

      setOpenDialog(false);
      toast({
        title: "Success",
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

  const form = useForm<IEditBook>({
    resolver: zodResolver(editBookSchema),
    defaultValues: {
      id: data.id,
      title: data.title,
      author: data.author,
      isbn: data.isbn,
      category: data.category,
      cover_image: data.cover_image,
      description: data.description,
      featured: data.featured,
    },
    values: {
      id: data.id,
      title: data.title,
      author: data.author,
      isbn: data.isbn,
      category: data.category,
      cover_image: "",
      description: data.description,
      featured: data.featured,
    },
  });

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger>
        <Pencil />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-3">Edit Book</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            className="grid grid-cols-1 gap-7 dark:text-white"
            onSubmit={form.handleSubmit(editBookHandler)}
          >
            <CustomFormField
              label="Book Title"
              control={form.control}
              name="title"
            >
              {(field) => (
                <Input type="text" placeholder="Book Title" {...field} />
              )}
            </CustomFormField>

            <CustomFormField
              label="Cover Image"
              control={form.control}
              name="cover_image"
            >
              {(field) => (
                <Input type="file" placeholder="Cover Image" {...field} />
              )}
            </CustomFormField>

            <CustomFormField
              label="Author"
              control={form.control}
              name="author"
            >
              {(field) => <Input type="text" placeholder="Author" {...field} />}
            </CustomFormField>

            <CustomFormField label="ISBN" control={form.control} name="isbn">
              {(field) => <Input type="text" placeholder="ISBN" {...field} />}
            </CustomFormField>

            <CustomFormField
              label="Category"
              control={form.control}
              name="category"
            >
              {() => (
                <Select defaultValue={data.category}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Fiction">Fiction</SelectItem>
                    <SelectItem value="Fantasy">Fantasy</SelectItem>
                    <SelectItem value="Mystery">Mystery</SelectItem>
                    <SelectItem value="Romance">Romance</SelectItem>
                    <SelectItem value="Science">Science</SelectItem>
                    <SelectItem value="History">History</SelectItem>
                    <SelectItem value="Business">Business</SelectItem>
                    <SelectItem value="Children">Children</SelectItem>
                    <SelectItem value="Thriller">Thriller</SelectItem>
                    <SelectItem value="Biography">Biography</SelectItem>
                    <SelectItem value="Religion">Religion</SelectItem>
                    <SelectItem value="Cookbooks">Cookbooks</SelectItem>
                    <SelectItem value="Horror">Horror</SelectItem>
                    <SelectItem value="Psycology">Psycology</SelectItem>
                  </SelectContent>
                </Select>
              )}
            </CustomFormField>

            <CustomFormField
              label="Description"
              control={form.control}
              name="description"
            >
              {(field) => <Textarea placeholder="ISBN" {...field} />}
            </CustomFormField>

            <Button
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}
              type="submit"
            >
              {form.formState.isSubmitting ? (
                <>
                  <Loader2 className="mr-2 animate-spin" />
                  Loading
                </>
              ) : (
                "Update"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditBookDialog;
