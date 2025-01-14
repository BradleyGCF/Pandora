import React from "react";

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  variant?: "primary" | "secondary" | "text"; // Puedes añadir más variantes si lo necesitas
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  disabled = false,
  leftIcon,
  rightIcon,
  onClick,
  variant = "primary",
}) => {
  // Estilos según el tipo de variante
  const baseStyles = "py-2 px-4 rounded focus:outline-none transition-all";
  const variantStyles = {
    primary: "",
    secondary: "",
    text: "",
  };

  const disabledStyles = "bg-gray-400 text-gray-600 cursor-not-allowed";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${disabled ? disabledStyles : ""} ${className}`}
    >
      <div className={`flex items-center justify-center gap-5`}>
        {leftIcon && <span className="w-5 h-5">{leftIcon}</span>}{" "}
        {children}
        {rightIcon && <span className="w-5 h-5">{rightIcon}</span>}{" "}
      </div>
    </button>
  );
};
