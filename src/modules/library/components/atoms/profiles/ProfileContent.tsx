import React from "react";
import { twMerge } from "tailwind-merge";

export interface AvatarContentProps {
  imageSrc?: string;
  name?: string;
  surname?: string;
  icon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export const AvatarContent: React.FC<AvatarContentProps> = ({
  imageSrc,
  name,
  surname,
  icon,
  size = "md",
}) => {

  const getInitials = () => {
    if (name && surname) return `${name[0]}${surname[0]}`;
    if (name) return name[0];
    return "?";
  };

  const sizeClasses = {
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-12 h-12 text-lg",
  };

  return (
    <div className="relative flex items-center">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt="Profile"
          className={twMerge("rounded-full object-cover", sizeClasses[size])}
        />
      ) : icon ? (
        <div
          className={twMerge(
            "flex items-center justify-center bg-gray-200 rounded-full text-gray-600",
            sizeClasses[size]
          )}
        >
          {icon}
        </div>
      ) : (
        <div
          className={twMerge(
            "flex items-center justify-center bg-purple-500 text-white font-bold rounded-full",
            sizeClasses[size]
          )}
        >
          {getInitials()}
        </div>
      )}
    </div>
  );
};
