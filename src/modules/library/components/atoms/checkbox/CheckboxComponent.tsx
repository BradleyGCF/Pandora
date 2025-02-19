import React, { PropsWithChildren, useState } from "react";
import { Checkbox, CheckboxProps } from "./Checkbox";
import { twMerge } from "tailwind-merge";
import { DocumentIcon } from "@heroicons/react/24/outline";

const variantStyles = {
  default: "border-2 border-purple-700",
  hover: "border-2 hover:ring-purple-700 hover:border-purple-700",
  focus: "border-4 focus:border-[#D1C4E9] outline-none border-[#D1C4E9]",
  disabled: "border-2 bg-[#EDE7F6] outline-none text-[#828282]",
};

export const CheckboxDefault: React.FC<PropsWithChildren<CheckboxProps>> = ({
  className,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus.",
  title = "Title",
}) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Checkbox
      checkboxPosition="left"
      checked={isChecked}
      className={twMerge(`${variantStyles.default} ${className}`)}
      description={description}
      onChange={setIsChecked}
      title={title}
    />
  );
};

export const CheckboxHover: React.FC<PropsWithChildren<CheckboxProps>> = ({
  className,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus.",
  title = "Title",
}) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Checkbox
      checkboxPosition="left"
      checked={isChecked}
      className={twMerge(`${variantStyles.hover} ${className}`)}
      description={description}
      onChange={setIsChecked}
      title={title}
    />
  );
};

export const CheckboxFocus: React.FC<PropsWithChildren<CheckboxProps>> = ({
  className,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus.",
  title = "Title",
}) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Checkbox
      checkboxPosition="left"
      checked={isChecked}
      className={twMerge(`${variantStyles.focus} ${className}`)}
      description={description}
      onChange={setIsChecked}
      title={title}
    />
  );
};

export const CheckboxDisabled: React.FC<PropsWithChildren<CheckboxProps>> = ({
  className,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus.",
  title = "Title",
}) => {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <Checkbox
      checkboxPosition="left"
      checked={isChecked}
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      description={description}
      disabled={true}
      onChange={setIsChecked}
      title={title}
    />
  );
};
67374198260;
export const CheckboxDefaultIcon: React.FC<
  PropsWithChildren<CheckboxProps>
> = ({
  className,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus.",
  icon,
  title = "Title",
}) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Checkbox
      checked={isChecked}
      className={twMerge(`${variantStyles.default} ${className}`)}
      description={description}
      icon={icon || <DocumentIcon className="w-2 h-2 text-purple-600 " />}
      onChange={setIsChecked}
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
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Checkbox
      checked={isChecked}
      className={twMerge(`${variantStyles.hover} ${className}`)}
      description={description}
      icon={icon || <DocumentIcon className="w-2 h-2 text-purple-600 " />}
      onChange={setIsChecked}
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
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Checkbox
      checked={isChecked}
      className={twMerge(`${variantStyles.focus} ${className}`)}
      description={description}
      icon={icon || <DocumentIcon className="w-2 h-2 text-purple-600 " />}
      onChange={setIsChecked}
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
  const [isChecked] = useState(true);
  return (
    <Checkbox
      checked={isChecked}
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      description={description}
      disabled={true}
      icon={icon || <DocumentIcon className="w-2 h-2 text-purple-600 " />}
      showIcon={true}
      title={title}
    />
  );
};
