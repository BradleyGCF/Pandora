import { PropsWithChildren } from "react";
import { Checkbox, CheckboxProps } from "./Checkbox";
import { twMerge } from "tailwind-merge";

const variantStyles = {
  default: "focus:border-purple-700 border-purple-700",
  hover: "hover:ring-purple-700 hover:border-purple-700",
  focus: "border-4 border-[#D1C4E9] outline-none ring-2 ring-[#D1C4E9]",
  disabled: "border-4 border-[#BFDBFE] outline-none ring-2 ring-[#BFDBFE]",
};

export const CheckboxDefault: React.FC<PropsWithChildren<CheckboxProps>> = ({
  title = "Title",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus.",
  className,
}) => {
  return (
    <Checkbox
      title={title}
      description={description}
      className={twMerge(`${variantStyles.default} ${className}`)}
    />
  );
};

export const CheckboxHover: React.FC<PropsWithChildren<CheckboxProps>> = ({
  title = "Title",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus.",
  className,
}) => {
  return (
    <Checkbox
      title={title}
      description={description}
      className={twMerge(`${variantStyles.hover} ${className}`)}
    />
  );
};

export const CheckboxFocus: React.FC<PropsWithChildren<CheckboxProps>> = ({
  title = "Title",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus.",
  className,
}) => {
  return (
    <Checkbox
      title={title}
      description={description}
      className={twMerge(`${variantStyles.focus} ${className}`)}
    />
  );
};

export const CheckboxDisabled: React.FC<PropsWithChildren<CheckboxProps>> = ({
  title = "Title",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus.",
  className,
}) => {
  return (
    <Checkbox
      title={title}
      description={description}
      className={twMerge(`${variantStyles.disabled} ${className}`)}
    />
  );
};

