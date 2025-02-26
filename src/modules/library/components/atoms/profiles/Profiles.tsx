import { UserIcon, UsersIcon } from "@heroicons/react/24/outline";
import React from "react";
import { twMerge } from "tailwind-merge";

export type ProfilesProps = {
  border?: boolean;
  className?: string;
  icon?: React.ReactNode;
  imageSrc?: string;
  name?: string;
  onlineSize?:
    | "onlineXs"
    | "onlineSm"
    | "onlineMd"
    | "onlineLg"
    | "onlineXl"
    | "onlineXxl";
  surname?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  variant?: "default" | "border" | "online";
};

export const Profiles: React.FC<ProfilesProps> = ({
  border = false,
  className,
  icon,
  imageSrc,
  name,
  onlineSize = "onlineXs",
  size = "xs",
  surname,
  variant = "default",
}) => {
  const sizeStyles = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-14 h-14",
    xxl: "w-16 h-16",
  };

  const sizeOnline = {
    onlineXs: "w-2 h-2",
    onlineSm: "w-2.5 h-2.5",
    onlineMd: "w-3 h-3",
    onlineLg: "w-3.5 h-3.5",
    onlineXl: "w-4 h-4",
    onlineXxl: "w-5 h-5 ",
  };

  const borderStyle = border ? "border-2 border-white rounded-full" : "";
  const getInitials = () =>
    name || surname ? `${name?.[0] || ""}${surname?.[0] || ""}` : null;

  const content = imageSrc ? (
    <img
      src={imageSrc}
      alt="Profile"
      className={twMerge("rounded-full object-cover", sizeStyles[size], borderStyle )}
    />
  ) : getInitials() ? (
    <div
      className={twMerge(
        "flex items-center justify-center text-2xl bg-[#D9D9D9] shadow-sm text-white font-bold rounded-full",
        sizeStyles[size]
      )}
    >
      {getInitials()}
    </div>
  ) : (
    <div
      className={twMerge(
        "flex items-center justify-center bg-gray-200 rounded-full text-gray-600",
        sizeStyles[size]
      )}
    >
      {icon || <UserIcon className="w-2/3 h-2/3 text-gray-500" />}
    </div>
  );

  return (
    <div className={twMerge("relative flex items-center", className)}>
      {content}
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
