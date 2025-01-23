import { UserIcon } from "@heroicons/react/24/solid";
import React from "react";

export type InputProps = {
  border?: "small" | "large" | "normal";
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  iconColor?: string;
  label?: string;
  onClick?: () => void;
  showIcon?: boolean;
  variant?: "default" | "border" | "line";
};

export const Input: React.FC<InputProps> = ({
  border = "small",
  children,
  className = "",
  disabled = false,
  error = false,
  helperText,
  iconColor = "text-gray-400",
  label,
  onClick,
  showIcon = false,
  variant = "default",
}) => {
  const baseStyles = "py-2 px-4 rounded focus:outline-none transition-all";
  const variantStyles = {
    border: "",
    default: "",
    line: "",
  };

  const borderRadiusVariants = {
    large: "rounded-[var(--radius-input-large)]",
    normal: "rounded-[var(--border-radius-normal)]",
    small: "rounded-[var(--radius-input-small)]",
  };

  const disabledStyles = "cursor-not-allowed";
  const errorStyles = "ring-red-400 focus:border-red-500";

  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-gray-500 font-medium">{label}</label>}
      <div className="relative flex items-center">
        {showIcon && (
          <UserIcon className={`w-5 h-5 absolute left-5 ${iconColor}`} />
        )}
        <input
          type="text"
          onClick={onClick}
          disabled={disabled}
          placeholder={typeof children === "string" ? children : ""}
          className={`${baseStyles} ${variantStyles[variant]} ${borderRadiusVariants[border]} ${disabled ? disabledStyles : ""} ${showIcon ? "pl-12" : "pl-4"} ${error ? errorStyles : ""} ${className}`}
        />
      </div>
      {helperText && (
        <span className="text-sm text-gray-500">{helperText}</span>
      )}
    </div>
  );
};
