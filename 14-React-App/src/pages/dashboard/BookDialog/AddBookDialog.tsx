import { useState } from "react";

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
import { Textarea } from "@/components/ui/textarea";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";

import { Loader2 } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormField from "@/components/CustomFormField";

import { createBookData, IAddBook, addBookSchema } from "@/utils/api/books";

const AddBookDialog = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const editBookHandler = async (values: IAddBook) => {
    try {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("author", values.author);
      formData.append("isbn", values.isbn);
      formData.append("category", values.category);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      formData.append("featured", values.featured as any);
      formData.append("description", values.description);
      formData.append("cover_image", values.cover_image[0]);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res = await createBookData(formData as any);

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

  const form = useForm<IAddBook>({
    resolver: zodResolver(addBookSchema),
    defaultValues: {
      title: "",
      author: "",
      isbn: "",
      category: "",
      cover_image: "",
      description: "",
      featured: false,
    },
  });

  const fileRef = form.register("cover_image", { required: true });

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger className="h-[40px] w-[100px] rounded-md bg-primary-black text-[14px] text-white dark:bg-white dark:text-primary-black">
        Add Book
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
              {() => (
                <Input
                  type="file"
                  accept="image/jpg, image/jpeg, image/png"
                  {...fileRef}
                />
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
              {(field) => (
                <Select onValueChange={field.onChange}>
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
              {(field) => <Textarea placeholder="Description" {...field} />}
            </CustomFormField>

            <Button
              disabled={form.formState.isSubmitting || !form.formState.isValid}
              aria-disabled={form.formState.isSubmitting}
              type="submit"
            >
              {form.formState.isSubmitting ? (
                <>
                  <Loader2 className="mr-2 animate-spin" />
                  Loading
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddBookDialog;
