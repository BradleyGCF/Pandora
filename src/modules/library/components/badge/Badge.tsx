import React from "react";
import { twMerge } from "tailwind-merge";

export type BadgeProps = {
  children?: string;
  className?: string;
  variant?: "pink" | "green" | "black" | "blue" | "orange" | "yellow" | "red";
  title: string;
  text: string;
  size: 'small' | 'medium' |  'large';
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  title = 'placeholder',
  text = 'placeholder',
  variant = "pink",
  size = 'large'
}) => {
  const baseStyles = " flex items-center justify-center text-white font-bold p-2  -rotate-90 ";

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
    small: "w-16 h-10",
    large: "w-16 h-20",
    medium: "w-16 h-24"
  }


  const borderRadius = 'bg-white flex flex-col justify-center h-16 w-52 rounded-tr-lg rounded-tl-lg rounded-bl-lg rounded-br-lg'

  const titleAndTextStyles = 'ml-12 font-normal';

  return (
    <div className="flex items-center bg-gray-400 p-10 relative">
      <div
        className={twMerge(
          `${variantStyles[variant]} ${variantSize[size]} ${baseStyles} rounded-tr-lg rounded-tl-lg rounded-bl-none ml-10 absolute -left-3 ${className}`
        )}
      >
        {children}
      </div>
      <div className={twMerge(`${borderRadius} ${className}`)}>
        <p className="ml-12">{title}</p>
        <span className="ml-12 text-gray-400">{text}</span>
      </div>
    </div>
  );
};
