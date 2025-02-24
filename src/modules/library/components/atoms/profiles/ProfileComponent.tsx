import React from "react";
import { Profiles, ProfilesProps } from "./Profiles";
import { twMerge } from "tailwind-merge";

const variantStyles = {
  default: "",
  border: "border-2 rounded-full border-gray-300",
  online: "relative",
};

export const ProfilePictureXs: React.FC<ProfilesProps> = ({
  imageSrc = "/public/Ellipse2.svg",
  className,
}) => {
  return (
    <Profiles
    className={twMerge(variantStyles.online, className)}
    imageSrc={imageSrc}
    size="xs"
    variant="online"
    border
    />
  );
};

export const ProfilePictureSm: React.FC<ProfilesProps> = ({
  className,
  imageSrc = "/public/Ellipse2.svg",
}) => {
  return (
    <Profiles
      className={twMerge(variantStyles.default, className)}
      imageSrc={imageSrc}
      size="sm"
    />
  );
};

export const ProfilePictureMd: React.FC<ProfilesProps> = ({
  className,
  imageSrc,
}) => {
  return (
    <Profiles
      className={twMerge(variantStyles.default, className)}
      imageSrc={imageSrc}
      size="md"
    />
  );
};

export const ProfilePictureLg: React.FC<ProfilesProps> = ({
  className,
  imageSrc,
}) => {
  return (
    <Profiles
      className={twMerge(variantStyles.default, className)}
      imageSrc={imageSrc}
      size="md"
    />
  );
};

export const ProfilePictureXl: React.FC<ProfilesProps> = ({
  className,
  imageSrc,
}) => {
  return (
    <Profiles
      className={twMerge(variantStyles.default, className)}
      imageSrc={imageSrc}
      size="md"
    />
  );
};
