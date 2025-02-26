import React from "react";
import { Profiles, ProfilesProps } from "./Profiles";
import { twMerge } from "tailwind-merge";
import { UserIcon } from "@heroicons/react/24/outline";

const variantStyles = {
  default: "",
  border: "border-2 rounded-full border-white",
  online: "relative",
};

export const ProfilePictureXs: React.FC<ProfilesProps> = ({
  className,
  imageSrc,
  name,
  surname,
}) => {
  return (
    <Profiles
      className={twMerge(variantStyles.default, className)}
      imageSrc={imageSrc}
      name={name}
      surname={surname}
      icon={
        !imageSrc && !name && !surname ? (
          <UserIcon className="w-4 h-4 text-gray-500" />
        ) : undefined
      }
      size="xs"
    />
  );
};

export const ProfilePictureSm: React.FC<ProfilesProps> = ({
  className,
  imageSrc,
  name,
  surname,
}) => {
  return (
    <Profiles
      className={twMerge(variantStyles.default, className)}
      imageSrc={imageSrc}
      name={name}
      surname={surname}
      icon={
        !imageSrc && !name && !surname ? (
          <UserIcon className="w-6 h-6 text-gray-500" />
        ) : undefined
      }
      size="sm"
    />
  );
};

export const ProfilePictureMd: React.FC<ProfilesProps> = ({
  className,
  imageSrc,
  name,
  surname,
}) => {
  return (
    <Profiles
      className={twMerge(variantStyles.default, className)}
      imageSrc={imageSrc}
      name={name}
      surname={surname}
      icon={
        !imageSrc && !name && !surname ? (
          <UserIcon className="w-7 h-7 text-gray-500" />
        ) : undefined
      }
      size="md"
    />
  );
};

export const ProfilePictureLg: React.FC<ProfilesProps> = ({
  className,
  imageSrc,
  name,
  surname,
}) => {
  return (
    <Profiles
      className={twMerge(variantStyles.default, className)}
      imageSrc={imageSrc}
      name={name}
      surname={surname}
      icon={
        !imageSrc && !name && !surname ? (
          <UserIcon className="w-8 h-8 text-gray-500" />
        ) : undefined
      }
      size="lg"
    />
  );
};

export const ProfilePictureXl: React.FC<ProfilesProps> = ({
  className,
  imageSrc,
  name,
  surname
}) => {
  return (
    <Profiles
      className={twMerge(variantStyles.default, className)}
      imageSrc={imageSrc}
      name={name}
      surname={surname}
      icon={!imageSrc && !name && !surname ? <UserIcon className="w-9 h-9 text-gray-500" /> : undefined}
      size="xl"
    />
  );
};

export const ProfilePictureXxl: React.FC<ProfilesProps> = ({
  className,
  imageSrc,
  name,
  surname
}) => {
  return (
    <Profiles
      className={twMerge(variantStyles.default, className)}
      imageSrc={imageSrc}
      name={name}
      surname={surname}
      icon={!imageSrc && !name && !surname ? <UserIcon className="w-11 h-11 text-gray-500" /> : undefined}
      size="xl"
    />
  );
};

export const ProfilePictureXsBorder: React.FC<ProfilesProps> = ({
  className,
  imageSrc = "/public/Ellipse2.svg",
}) => {
  return (
    <Profiles
      className={twMerge(variantStyles.border, className)}
      imageSrc={imageSrc}
      size="xs"
    />
  );
};

export const ProfilePictureSmBorder: React.FC<ProfilesProps> = ({
  className,
  imageSrc = "/public/Ellipse2.svg",
}) => {
  return (
    <Profiles
      className={twMerge(variantStyles.border, className)}
      imageSrc={imageSrc}
      size="sm"
    />
  );
};

export const ProfilePictureMdBorder: React.FC<ProfilesProps> = ({
  className,
  imageSrc,
}) => {
  return (
    <Profiles
      className={twMerge(variantStyles.border, className)}
      imageSrc={imageSrc}
      size="md"
    />
  );
};

export const ProfilePictureLgBorder: React.FC<ProfilesProps> = ({
  className,
  imageSrc,
}) => {
  return (
    <Profiles
      className={twMerge(variantStyles.border, className)}
      imageSrc={imageSrc}
      size="lg"
    />
  );
};

export const ProfilePictureXlBorder: React.FC<ProfilesProps> = ({
  className,
  imageSrc,
}) => {
  return (
    <Profiles
      className={twMerge(variantStyles.border, className)}
      imageSrc={imageSrc}
      size="xl"
    />
  );
};

export const ProfilePictureXxlBorder: React.FC<ProfilesProps> = ({
  className,
  imageSrc,
}) => {
  return (
    <Profiles
      className={twMerge(variantStyles.border, className)}
      imageSrc={imageSrc}
      size="xxl"
    />
  );
};

export const ProfilePictureXsOnline: React.FC<ProfilesProps> = ({
  className,
  imageSrc = "/public/Ellipse2.svg",
}) => {
  return (
    <Profiles
      border
      className={twMerge(variantStyles.online, className)}
      imageSrc={imageSrc}
      onlineSize="onlineXs"
      size="xs"
      variant="online"
    />
  );
};

export const ProfilePictureSmOnline: React.FC<ProfilesProps> = ({
  className,
  imageSrc = "/public/Ellipse2.svg",
}) => {
  return (
    <Profiles
      border
      className={twMerge(variantStyles.online, className)}
      imageSrc={imageSrc}
      onlineSize="onlineSm"
      size="sm"
      variant="online"
    />
  );
};

export const ProfilePictureMdOnline: React.FC<ProfilesProps> = ({
  className,
  imageSrc,
}) => {
  return (
    <Profiles
      border
      className={twMerge(variantStyles.online, className)}
      imageSrc={imageSrc}
      onlineSize="onlineMd"
      size="md"
      variant="online"
    />
  );
};

export const ProfilePictureLgOnline: React.FC<ProfilesProps> = ({
  className,
  imageSrc,
}) => {
  return (
    <Profiles
      border
      className={twMerge(variantStyles.online, className)}
      imageSrc={imageSrc}
      onlineSize="onlineLg"
      size="lg"
      variant="online"
    />
  );
};

export const ProfilePictureXlOnline: React.FC<ProfilesProps> = ({
  className,
  imageSrc,
}) => {
  return (
    <Profiles
      border
      className={twMerge(variantStyles.online, className)}
      imageSrc={imageSrc}
      onlineSize="onlineXl"
      size="xl"
      variant="online"
    />
  );
};

export const ProfilePictureXxlOnline: React.FC<ProfilesProps> = ({
  className,
  imageSrc,
  name,
  surname,
}) => {
  return (
    <Profiles
      border
      className={twMerge(variantStyles.online, className)}
      imageSrc={imageSrc}
      name={name}
      surname={surname}
      icon={
        !imageSrc && !name && !surname ? (
          <UserIcon className="w-full h-full text-gray-500" />
        ) : undefined
      }
      onlineSize="onlineXxl"
      size="xxl"
      variant="online"
    />
  );
};
