import {
  Control,
  ControllerRenderProps,
  FieldValues,
  FieldPath,
  Path,
} from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ReactNode } from "react";

interface IProps<T extends FieldValues> {
  name: FieldPath<T>;
  label: string;
  placeholder?: string;
  options?: string[];
  description?: string;
  control: Control<T>;
}

interface ChildrenProps<T extends FieldValues> extends IProps<T> {
  children: (field: ControllerRenderProps<T, Path<T>>) => ReactNode;
}

const CustomFormField = <T extends FieldValues>(props: ChildrenProps<T>) => {
  const { name, label, description, control, children } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>{children(field)}</FormControl>
          {description && (
            <FormDescription className="text-[12px]">
              {description}
            </FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
