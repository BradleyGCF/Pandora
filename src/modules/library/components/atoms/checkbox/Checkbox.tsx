import { DocumentIcon } from "@heroicons/react/24/outline";
import React from "react";

export type CheckboxProps = {
  className?: string;
  description?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  showIcon?: boolean;
  title?: string;
  variant?: "default" | "hover" | "focus" | "disabled";
};

export const Checkbox: React.FC<CheckboxProps> = ({
  className,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus.",
  disabled = false,
  icon,
  showIcon = false,
  title = "Title",
  variant = "default",
}) => {
  const variantStyles = {
    default: "",
    hover: "",
    focus: "",
    disabled: "",
  };

  const baseStyles = "w-5 h-5 accent-purple-700 bg-gray-100 rounded-sm";
  const disabledStyles = "cursor-not-allowed";
  const baseStylesBorder = "border-2";

  return (
    <div className={`${baseStylesBorder} flex items-center space-x-3 p-4 rounded-lg`}>
      <div className="bg-slate-200 p-2 rounded-full">
        <DocumentIcon className="w-2 h-2 text-purple-600" />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex items-center text-sm">
          <label
            htmlFor="helper-checkbox"
            className="font-medium text-gray-900 dark:text-gray-300"
          >
            {title}
          </label>
          <div className="ms-auto">
            <input
              disabled={disabled}
              type="checkbox"
              className={`${baseStyles}
            ${disabled ? disabledStyles : ""}
            ${className}`}
            />
          </div>
        </div>
        <p className="text-xs font-normal text-gray-500 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};
