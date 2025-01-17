import React from "react";

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  variant?: "primary" | "secondary" | "text";
  border?: "small" | "medium" | "large" | "normal";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  disabled = false,
  leftIcon,
  rightIcon,
  onClick,
  variant = "primary",
  border = 'small',
}) => {
  const baseStyles = "py-2 px-4 rounded focus:outline-none transition-all";
  const variantStyles = {
    primary: '',
    secondary: '',
    text: "",
  };

  const borderRadiusVariants = {
    small: 'rounded-[var(--border-radius-small)]',
    medium: 'rounded-[var(--border-radius-medium)]',
    large: 'rounded-[var(--border-radius-large)]',
    normal: 'rounded-[var(--border-radius-normal)]'
  };

  const disabledStyles = "bg-gray-400 text-gray-600 cursor-not-allowed";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${borderRadiusVariants[border]} ${disabled ? disabledStyles : ""} ${className}`}
    >
      <div className={`flex items-center justify-center gap-5`}>
        {leftIcon && <span className="w-5 h-5">{leftIcon}</span>}{" "}
        {children}
        {rightIcon && <span className="w-5 h-5">{rightIcon}</span>}{" "}
      </div>
    </button>
  );
};
