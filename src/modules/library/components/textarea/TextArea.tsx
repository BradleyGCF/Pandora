import React from "react";

export type TextAreaProps = {
  border?: "small" | "normal";
  children: React.ReactNode;
  className?: string;
  cols?: number;
  disabled?: boolean;
  error?: boolean;
  errorText?: string;
  label?: string;
  onClick?: () => void;
  rows?: number;
  variant?: "normal" | "rounded" | "border";
};

export const TextArea: React.FC<TextAreaProps> = ({
  border = "small",
  children,
  className = "",
  cols = 20,
  disabled = false,
  error = false,
  errorText,
  label,
  onClick,
  rows = 10,
  variant = "normal",
}) => {
  const baseStyles = "py-2 px-4 rounded focus:outline-none transition-all";
  const variantStyles = {
    normal: "",
    rounded: "",
    border: "",
  };

  const borderRadiusVariants = {
    small: "rounded-[var(--radius-input-small)]",
    normal: "rounded-[var(--border-radius-normal)]",
  };

  const disabledStyles = "cursor-not-allowed";
  const errorStyles = "ring-red-400 focus:border-red-500";

  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-gray-500 font-medium">{label}</label>}
      <div className="relative flex items-center">
        <textarea
          rows={rows}
          cols={cols}
          onClick={onClick}
          disabled={disabled}
          placeholder={typeof children === "string" ? children : ""}
          className={`${baseStyles} ${variantStyles[variant]} ${borderRadiusVariants[border]} ${disabled ? disabledStyles : ""} ${error ? errorStyles : ""}  ${className} resize-none overflow-hidden`}></textarea>
      </div>
      {errorText && (
        <span className="text-red-400">{errorText}</span>
      )}
    </div>
  );
};
