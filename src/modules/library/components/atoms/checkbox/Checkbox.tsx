import { DocumentIcon } from "@heroicons/react/24/outline";
import React from "react";

export type CheckboxProps = {
  checked?: boolean;
  checkboxPosition?: "left" | "right";
  className?: string;
  description?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  showIcon?: boolean;
  title?: string;
  variant?: "default" | "hover" | "focus" | "disabled";
};

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  checkboxPosition = "right",
  className,
  description,
  disabled = false,
  icon,
  showIcon = false,
  title,
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

  return (
    <div
    className={` ${variantStyles[variant]} ${className} flex gap-x-1.5 p-4 rounded-xl`}
  >
    {checkboxPosition === "left" && (
      <input
        checked={checked}
        disabled={disabled}
        type="checkbox"
        className={`${baseStyles} ${disabled ? disabledStyles : ""}`}
      />
    )}

    <div className="flex items-center">
    {showIcon && icon && (
      <div className="bg-[#EDE7F6] p-2 rounded-full">
        <span>{icon}</span>
      </div>
    )}
    </div>

    <div className="flex flex-col w-full">
      <div className="flex text-sm">
        <label htmlFor="helper-checkbox" className="font-medium">
          {title}
        </label>
      </div>
      <p className="text-xs font-normal text-[#828282]">{description}</p>
    </div>

    {checkboxPosition === "right" && (
      <input
        checked={checked}
        disabled={disabled}
        type="checkbox"
        className={`${baseStyles} ${disabled ? disabledStyles : ""}`}
      />
    )}
  </div>
  );
};
