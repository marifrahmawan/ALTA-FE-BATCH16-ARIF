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
import { Pencil } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { IBook } from "@/utils/api/books";

interface IProps {
  data: IBook;
}

const EditBookDialog = (props: IProps) => {
  const { data } = props;

  return (
    <Dialog>
      <DialogTrigger>
        <Pencil />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-3">Edit Book</DialogTitle>
        </DialogHeader>
        <form className="grid grid-cols-1 gap-7 dark:text-white">
          <div>
            <Label>Book Title</Label>
            <Input type="text" value={data.title} />
          </div>
          <div>
            <Label>Cover Image</Label>
            <Input type="file" />
          </div>
          <div>
            <Label>Author</Label>
            <Input type="text" value={data.author} />
          </div>
          <div>
            <Label>ISBN</Label>
            <Input type="text" value={data.isbn} />
          </div>
          <div>
            <Label>Category</Label>
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
          </div>
          <div>
            <Label>Description</Label>
            <Textarea value={data.description}></Textarea>
          </div>

          <div>
            <Button>Save Changes</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditBookDialog;
