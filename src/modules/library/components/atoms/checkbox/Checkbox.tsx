import { DocumentIcon } from "@heroicons/react/24/outline";
import React from "react";

export type CheckboxProps = {
  checked?: boolean;
  checkboxPosition?: "left" | "right";
  className?: string;
  description?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  onChange?: (checked: boolean) => void;
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
  onChange,
  title,
  variant = "default",
}) => {
  const variantStyles = {
    default: "",
    hover: "",
    focus: "",
    disabled: "",
  };

  const disabledStyles = "cursor-not-allowed";

  return (
    <div
      className={`${disabled ? disabledStyles : ""} ${variantStyles[variant]} ${className} flex gap-x-1.5 p-4 rounded-xl`}
    >
      {checkboxPosition === "left" && (
        <label className="relative flex items-center cursor-pointer">
          <input
            disabled={disabled}
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange?.(e.target.checked)}
            className="peer hidden"
          />
          <div
            className={`w-5 h-5 rounded-sm flex items-center justify-center transition-all
              ${disabled ? "bg-[#828282] border-gray-300 cursor-not-allowed" : "bg-gray-100 cursor-pointer"}
              peer-checked:${disabled ? "bg-gray-500 border-gray-500" : "bg-purple-700 border-purple-700"}
            `}
          >
            {checked && (
              <span
                className={`${disabled ? disabledStyles : ""} text-white text-xs font-bold`}
              >
                ✓
              </span>
            )}
          </div>
        </label>
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
        <label className="relative flex items-center cursor-pointer">
          <input
            disabled={disabled}
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange?.(e.target.checked)}
            className="peer hidden"
          />
          <div
            className={`w-5 h-5 rounded-sm flex items-center justify-center transition-all
            ${disabled ? "bg-[#828282] border-gray-300 cursor-not-allowed" : "bg-gray-100 cursor-pointer"}
            peer-checked:${disabled ? "bg-gray-500 border-gray-500" : "bg-purple-700 border-purple-700"}
          `}
          >
            {checked && (
              <span
                className={`${disabled ? disabledStyles : ""} text-white text-xs font-bold`}
              >
                ✓
              </span>
            )}
          </div>
        </label>
      )}
    </div>
  );
};
