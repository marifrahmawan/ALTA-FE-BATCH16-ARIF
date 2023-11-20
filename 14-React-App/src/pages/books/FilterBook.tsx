import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/utils/utils";
import { Button } from "@/components/ui/button";

import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const filters = [
  {
    value: "default",
    label: "Default",
  },
  {
    value: "new",
    label: "New",
  },
];

const FilterBook = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filterParams, setFilterParams] = useSearchParams();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="dark:bg-primary-black">
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? filters.find((filter) => filter.value === value)?.label
            : "Filter"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandGroup>
            {filters.map((filter) => (
              <CommandItem
                key={filter.value}
                value={filter.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                  setFilterParams(
                    currentValue === value ? "" : { sort: currentValue },
                  );
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === filter.value ? "opacity-100" : "opacity-0",
                  )}
                />
                {filter.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default FilterBook;
