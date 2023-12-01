import { debounce } from "lodash";

import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/utils/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBooks } from "@/utils/api/books";

interface SearchBoxDatas {
  id: number;
  title: string;
}

interface SearchBoxProps {
  placeholder?: string;
}

const SearchBox = ({ placeholder = "Search..." }: SearchBoxProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const [datas, setDatas] = useState<SearchBoxDatas[]>([]);

  const getSuggestions = useCallback(async (query: string) => {
    if (!query) return;

    const res = await getBooks({ query: query });
    const newDatas =
      res?.payload.datas.map((data) => {
        return { id: data.id, title: data.title };
      }) ?? [];
    setDatas(newDatas);
  }, []);

  const getSuggestionsDebounce = useMemo(
    () => debounce(getSuggestions, 1000),
    [getSuggestions],
  );

  const onInputChange = (newValue: string) => {
    getSuggestionsDebounce(newValue);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between"
        >
          {value || placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput
            placeholder={placeholder}
            onValueChange={onInputChange}
          />
          <CommandEmpty>No Book Found</CommandEmpty>
          <CommandGroup>
            {datas.map((data) => (
              <CommandItem
                key={data.title}
                value={data.title}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setDatas([]);
                  setOpen(false);
                  navigate(`books/${data.id}`);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === data.title ? "opacity-100" : "opacity-0",
                  )}
                />
                {data.title}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SearchBox;
