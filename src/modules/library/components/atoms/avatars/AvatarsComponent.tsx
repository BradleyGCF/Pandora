import React from "react";
import { AvatarProps, Avatars } from "./Avatars";
import { twMerge } from "tailwind-merge";

const variantStyles = {
  small: "text-xs",
  medium: "text-sm",
  large: "text-sm",
};

export const AvatarsSm: React.FC<AvatarProps> = ({
  className,
  email,
  image,
  imageStyle = "w-8",
  name,
  nameStyle,
  emailStyle,
}) => {
  return (
    <Avatars
    name={name}
    email={email}
    image={image}
    imageStyle={imageStyle}
    nameStyle={nameStyle}
    emailStyle={emailStyle}
    className={twMerge(className, variantStyles.small)}
    />
  );
};

export const AvatarsMd: React.FC<AvatarProps> = ({
  className,
  email,
  image,
  imageStyle = "w-10",
  name,
  nameStyle,
  emailStyle,
}) => {
  return (
    <Avatars
    name={name}
    email={email}
    image={image}
    imageStyle={imageStyle}
    nameStyle={nameStyle}
    emailStyle={emailStyle}
    className={twMerge(className, variantStyles.medium)}
    />
  );
};

export const AvatarsLg: React.FC<AvatarProps> = ({
  className,
  email,
  image,
  imageStyle = "w-12",
  name,
  nameStyle,
  emailStyle,
}) => {
  return (
    <Avatars
      name={name}
      email={email}
      image={image}
      imageStyle={imageStyle}
      nameStyle={nameStyle}
      emailStyle={emailStyle}
      className={twMerge(className, variantStyles.large)}
    />
  );
};
