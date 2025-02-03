import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

export type TextAreaProps = {
  children: React.ReactNode;
  className?: string;
  cols?: number;
  disabled?: boolean;
  error?: boolean;
  errorFocus?: boolean;
  helperText?: string;
  label?: string;
  onClick?: () => void;
  rows?: number;
  variant?:
    | "default"
    | "filled"
    | "focused"
    | "disabled"
    | "error"
    | "errorFocused";
};

export const TextArea: React.FC<TextAreaProps> = ({
  children,
  className = "",
  cols = 30,
  disabled = false,
  error = false,
  errorFocus = false,
  helperText,
  label,
  onClick,
  variant = "default",
}) => {
  const baseStyles = "py-2 px-4 rounded focus:outline-none transition-all";
  const variantStyles = {
    default: "",
    filled: "",
    focused: "",
    disabled: "",
    error: "",
    errorFocused: "",
  };

  const disabledStyles = "cursor-not-allowed";
  const errorStyles = "ring-1 ring-red-400 focus:border-red-500";
  const errorFocused = "border-2 border-[#FC6F8D] ring-4 ring-[#F53D68]";

  return (
    <div className="flex flex-col rounded gap-1">
      <div className="flex items-center">
        {label && <label>{label} *</label>}
        <QuestionMarkCircleIcon className="w-5 h-5 ml-1 text-gray-500" />
      </div>
      <div className="relative flex items-center">
        <textarea
          cols={cols}
          onClick={onClick}
          disabled={disabled}
          placeholder={typeof children === "string" ? children : ""}
          className={`${baseStyles} ${variantStyles[variant]} ${disabled ? disabledStyles : ""} ${error ? errorStyles : ""} ${errorFocus ? errorFocused : ""} ${className} shadow-sm shadow-[rgba(20,30,40,0.12)] overflow-hidden`}
        ></textarea>
      </div>
      {helperText && (
        <span className={`text-sm ${error ? "text-red-400" : "text-gray-500"}`}>
          {helperText}
        </span>
      )}
    </div>
  );
};
