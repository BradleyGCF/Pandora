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
  checkboxStyle,
  className,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus.",
  title = "Title",
}) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Checkbox
      checkboxPosition="left"
      checkboxStyle={checkboxStyle}
      checked={isChecked}
      className={twMerge(`${variantStyles.default} ${className}`)}
      description={description}
      onChange={setIsChecked}
      title={title}
    />
  );
};

export const CheckboxHover: React.FC<PropsWithChildren<CheckboxProps>> = ({
  checkboxStyle,
  className,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus.",
  title = "Title",
}) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Checkbox
      checkboxPosition="left"
      checkboxStyle={checkboxStyle}
      checked={isChecked}
      className={twMerge(`${variantStyles.hover} ${className}`)}
      description={description}
      onChange={setIsChecked}
      title={title}
    />
  );
};

export const CheckboxFocus: React.FC<PropsWithChildren<CheckboxProps>> = ({
  checkboxStyle,
  className,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus.",
  title = "Title",
}) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Checkbox
      checkboxPosition="left"
      checked={isChecked}
      checkboxStyle={checkboxStyle}
      className={twMerge(`${variantStyles.focus} ${className}`)}
      description={description}
      onChange={setIsChecked}
      title={title}
    />
  );
};

export const CheckboxDisabled: React.FC<PropsWithChildren<CheckboxProps>> = ({
  checkboxStyle,
  className,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus.",
  title = "Title",
}) => {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <Checkbox
      checkboxStyle={checkboxStyle}
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

export const CheckboxDefaultIcon: React.FC<
  PropsWithChildren<CheckboxProps>
> = ({
  checkboxStyle,
  className,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus.",
  icon,
  title = "Title",
}) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Checkbox
      checkboxStyle={checkboxStyle}
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
  checkboxStyle,
  className,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus.",
  icon,
  title = "Title",
}) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Checkbox
      checkboxStyle={checkboxStyle}
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
  checkboxStyle,
  className,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus.",
  icon,
  title = "Title",
}) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Checkbox
      checkboxStyle={checkboxStyle}
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
  checkboxStyle,
  className,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus.",
  icon,
  title = "Title",
}) => {
  const [isChecked] = useState(true);
  return (
    <Checkbox
      checkboxStyle={checkboxStyle}
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

export const CheckboxSimpleComponent: React.FC<CheckboxProps> = ({
  checked,
  className,
  onChange,
  checkboxStyle,
}) => {
  return (
    <label className="flex cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="peer hidden"
      />
      <div
        className={twMerge(
          `w-5 h-5 border-2 border-[#828282] rounded-sm flex items-center justify-center transition-all bg-white peer-checked:bg-purple-700 peer-checked:border-transparent`,
          className,
          checkboxStyle
        )}
      >
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 13 13"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.4516 2.46958C12.7862 2.82011 12.7733 3.37551 12.4228 3.71011L5.79935 10.0754C5.62835 10.2387 5.39871 10.326 5.16245 10.3176C4.92619 10.3092 4.7033 10.2059 4.54428 10.031L1.30827 6.53714C0.982299 6.17858 1.00872 5.62365 1.36729 5.29769C1.72585 4.97172 2.28077 4.99814 2.60674 5.35671L5.238 8.1853L11.2111 2.44073C11.5617 2.10614 12.1171 2.11905 12.4516 2.46958Z"
              fill="white"
            />
          </svg>
        )}
      </div>
    </label>
  );
};

export const CheckboxSimple: React.FC<CheckboxProps> = ({className}) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <CheckboxSimpleComponent className={className} checked={isChecked} onChange={setIsChecked} />
  )
}