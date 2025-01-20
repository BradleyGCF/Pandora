import React from "react";

export type InputProps = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  variant?: "default" | "border" | "line";
  border?: "small" | "medium" | "large" | "normal";
};

export const Input: React.FC<InputProps> = ({
  children,
  className = "",
  disabled = false,
  onClick,
  variant = "default",
  border = "small",
}) => {
  const baseStyles = "py-2 px-4 rounded focus:outline-none transition-all";
  const variantStyles = {
    default: "",
    border: "",
    line: "",
  };

  const borderRadiusVariants = {
    small: "rounded-[var(--border-radius-small)]",
    medium: "rounded-[var(--border-radius-medium)]",
    large: "rounded-[var(--border-radius-large)]",
    normal: "rounded-[var(--border-radius-normal)]",
  };

  const disabledStyles = "bg-gray-400 text-gray-600 cursor-not-allowed";

  return (
    <div className={`flex items-center justify-center gap-5`}>
      <input
        type="text"
        onClick={onClick}
        disabled={disabled}
        placeholder={typeof children === "string" ? children : ""}
        className={`${baseStyles} ${variantStyles[variant]} ${borderRadiusVariants[border]} ${disabled ? disabledStyles : ""} ${className}`}
      />
    </div>
  );
};
