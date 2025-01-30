import React from "react";
import { twMerge } from "tailwind-merge";

export type BadgeProps = {
  children?: string;
  className?: string;
  size: "small" | "medium" | "large";
  text: string;
  title: string;
  variant?: "pink" | "green" | "black" | "blue" | "orange" | "yellow" | "red";
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  size = "large",
  text = "placeholder",
  title = "placeholder",
  variant = "pink",
}) => {
  const baseStyles =
    " flex items-center justify-center text-white font-bold p-2";

  const borderRadiusSmall =
    "bg-white flex flex-col justify-center rounded-tr-lg rounded-tl-lg rounded-bl-lg rounded-br-lg";

  const variantStyles = {
    pink: "bg-pink-600",
    green: "bg-green-600",
    black: "bg-black",
    blue: "bg-blue-600",
    orange: "bg-orange-600",
    yellow: "bg-yellow-600",
    red: "bg-red-600",
  };

  const variantSize = {
    small: "w-52 h-16",
    medium: "w-72 h-20",
    large: "w-80 h-24",
  };

  const variantSizeStyles = {
    small: "w-8 h-16",
    medium: "w-16 h-20",
    large: "w-28 h-24"
  }

  const titleAndTextStyles = {
    small: "ml-12",
    medium: "ml-20",
    large: "ml-32",
  };

  return (
    <div className="flex items-center bg-gray-400 p-10 relative">
      <div className={`${variantSize[size]} `} >
        <div
          className={twMerge(
            `${variantStyles[variant]} ${baseStyles} ${variantSizeStyles[size]} rounded-tl-lg rounded-bl-lg rounded-br-none ml-10 absolute -left-0 ${className}`
          )}
        >
          <p className="-rotate-90">{children}</p>
        </div>
        <div className={twMerge(`${borderRadiusSmall} ${variantSize[size]} ${className}`)}>
          <p className={twMerge(`${titleAndTextStyles[size]} ${className}`)}>{title}</p>
          <span className={twMerge(`${titleAndTextStyles[size]} text-gray-400 ${className}`)}>{text}</span>
        </div>
      </div>
    </div>
  );
};
