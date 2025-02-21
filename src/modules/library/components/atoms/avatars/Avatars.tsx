import React from "react";
import { twMerge } from "tailwind-merge";

export type AvatarProps = {
  className?: string;
  email?: string;
  image?: string;
  imageStyle?: string;
  name?: string;
  nameStyle?: string;
  emailStyle?: string;
  variant?: "small" | "medium" | "large";
};

const variantStyle = {
  small: "",
  medium: "",
  large: "",
};

export const Avatars: React.FC<AvatarProps> = ({
  className,
  email = "maria@ui.email.com",
  emailStyle,
  image = "/public/Ellipse2.svg",
  imageStyle,
  nameStyle,
  name = "Maria Rhye",
  variant = "small",
}) => {
  return (
    <div className={twMerge("flex items-center gap-2", className)}>
      <img className={twMerge(imageStyle)} src={image} />
      <div className={twMerge("", className, variantStyle[variant])}>
        <div className={twMerge("text-[#373737] font-medium", nameStyle)}>
          {name}
        </div>
        <div className={twMerge("text-[#828282] font-normal", emailStyle)}>
          {email}
        </div>
      </div>
    </div>
  );
};
