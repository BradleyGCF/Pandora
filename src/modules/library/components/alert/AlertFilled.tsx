import { PropsWithChildren } from "react";
import { Alert, AlertProps } from "./Alert";
import { twMerge } from "tailwind-merge";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

const variantStyles = {
  error: "bg-red-700",
  warning: "bg-orange-700",
  info: "bg-sky-700",
  success: "bg-green-800",
};

export const ErrorAlert: React.FC<PropsWithChildren<AlertProps>> = ({
  className,
  description = "{Description}",
  title = "{Title}",
  ...props
}) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.error} ${className}`)}
      description={description}
      title={title}
      variant="filled"
      size="medium"
      icon={<ExclamationCircleIcon className="w-6 h-6 text-white" />}
      {...props}
    ></Alert>
  );
};

export const WarningAlert: React.FC<PropsWithChildren<AlertProps>> = ({
  className,
  description = "{Description}",
  title = "{Title}",
  ...props
}) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.warning} ${className}`)}
      description={description}
      title={title}
      variant="filled"
      size="medium"
      icon={<ExclamationCircleIcon className="w-6 h-6 text-white" />}
      {...props}
    ></Alert>
  );
};

export const InfoAlert: React.FC<PropsWithChildren<AlertProps>> = ({
  className,
  description = "{Description}",
  title = "{Title}",
  ...props
}) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.info} ${className}`)}
      description={description}
      title={title}
      variant="filled"
      size="medium"
      icon={<ExclamationCircleIcon className="w-6 h-6 text-white" />}
      {...props}
    ></Alert>
  );
};

export const SuccessAlert: React.FC<PropsWithChildren<AlertProps>> = ({
  className,
  description = "{Description}",
  title = "{Title}",
  ...props
}) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.success} ${className}`)}
      description={description}
      title={title}
      variant="filled"
      size="medium"
      icon={<ExclamationCircleIcon className="w-6 h-6 text-white" />}
      {...props}
    ></Alert>
  );
};
