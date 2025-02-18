import React, { PropsWithChildren} from "react";
import { Checkbox, CheckboxProps } from "./Checkbox";
import { twMerge } from "tailwind-merge";
import { DocumentIcon } from "@heroicons/react/24/outline";

const variantStyles = {
  default: "border-2 border-purple-700",
  hover: "border-2 hover:ring-purple-700 hover:border-purple-700",
  focus: "border-4 focus-within:border-4 focus-within:border-[#D1C4E9] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#D1C4E9]",
  disabled: "border-2 bg-[#EDE7F6] outline-none text-[#828282]",
};

export const CheckboxDefault: React.FC<PropsWithChildren<CheckboxProps>> = ({
  className,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus.",
  title = "Title",
}) => {
  return (
    <Checkbox
      checkboxPosition="left"
      className={twMerge(`${variantStyles.default} ${className}`)}
      description={description}
      title={title}
    />
  );
};

export const CheckboxHover: React.FC<PropsWithChildren<CheckboxProps>> = ({
  className,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus.",
  title = "Title",
}) => {
  return (
    <Checkbox
      checkboxPosition="left"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      description={description}
      title={title}
    />
  );
};

export const CheckboxFocus: React.FC<PropsWithChildren<CheckboxProps>> = ({
  className,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus.",
  title = "Title",
}) => {
  return (
    <Checkbox
      checkboxPosition="left"
      className={twMerge(`${variantStyles.focus} ${className}`)}
      description={description}
      title={title}
    />
  );
};

export const CheckboxDisabled: React.FC<PropsWithChildren<CheckboxProps>> = ({
  className,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus.",
  title = "Title",
}) => {
  return (
    <Checkbox
      checkboxPosition="left"
      checked={true}
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      description={description}
      disabled={true}
      title={title}
      
    />
  );
};
67374198260
export const CheckboxDefaultIcon: React.FC<
  PropsWithChildren<CheckboxProps>
> = ({
  className,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus.",
  icon,
  title = "Title",
}) => {
  return (
    <Checkbox
      className={twMerge(`${variantStyles.default} ${className}`)}
      description={description}
      icon={icon || <DocumentIcon className="w-2 h-2 text-purple-600 " />}
      showIcon={true}
      title={title}
    />
  );
};

export const CheckboxHoverIcon: React.FC<PropsWithChildren<CheckboxProps>> = ({
  className,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus.",
  icon,
  title = "Title",
}) => {
  return (
    <Checkbox
      className={twMerge(`${variantStyles.hover} ${className}`)}
      description={description}
      icon={icon || <DocumentIcon className="w-2 h-2 text-purple-600 " />}
      showIcon={true}
      title={title}
    />
  );
};

export const CheckboxFocusIcon: React.FC<PropsWithChildren<CheckboxProps>> = ({
  className,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus.",
  icon,
  title = "Title",
}) => {
  return (
    <Checkbox
      className={twMerge(`${variantStyles.focus} ${className}`)}
      description={description}
      icon={icon || <DocumentIcon className="w-2 h-2 text-purple-600 " />}
      showIcon={true}
      title={title}
    />
  );
};

export const CheckboxDisabledIcon: React.FC<
  PropsWithChildren<CheckboxProps>
> = ({
  className,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus.",
  icon,
  title = "Title",
}) => {
  return (
    <Checkbox
      checked={true}
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      description={description}
      disabled={true}
      icon={icon || <DocumentIcon className="w-2 h-2 text-purple-600 " />}
      showIcon={true}
      title={title}
    />
  );
};
