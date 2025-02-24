import React from "react";
import { twMerge } from "tailwind-merge";

export type ProfilesProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  variant?: "default" | "border" | "online";
  imageSrc?: string;
  className?: string;
  border?: boolean;
  onlineSize?: "onlineXs" | "onlineSm" | "onlineMd" | "onlineLg" | "onlineXl" | "onlineXxl"
};

export const Profiles: React.FC<ProfilesProps> = ({
  border = false,
  className,
  imageSrc = "/Ellipse2.svg",
  size = "xs",
  variant = "default",
  onlineSize = "onlineXs"
}) => {
  
  const sizeStyles = {
    xs: "w-6",
    sm: "w-8",
    md: "w-10",
    lg: "w-12",
    xl: "w-14",
    xxl: "w-16",
  };

  const sizeOnline = {
    onlineXs: "w-2 h-2",
    onlineSm: "w-2.5 h-2.5",
    onlineMd: "w-3 h-3",
    onlineLg: "w-3.5 h-3.5",
    onlineXl: "w-4 h-4",
    onlineXxl: "w-5 h-5",
  }

  const borderStyle = border ? "border-2 border-white rounded-full" : "";

  return (
    <div className={twMerge("relative flex items-center w-", className)}>
      <img
        src={imageSrc}
        alt="Profile"
        className={twMerge(
          "rounded-full object-cover",
          sizeStyles[size],
          borderStyle
        )}
      />

      {variant === "online" && (
        <span
          className={twMerge(
            "absolute bottom-0 right-0 bg-green-500 rounded-full border-2 border-white",
            sizeOnline[onlineSize]
          )}
        />
      )}
    </div>
  );
};
