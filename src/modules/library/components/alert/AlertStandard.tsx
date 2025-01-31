import { PropsWithChildren } from "react";
import { Alert, AlertProps } from "./Alert";
import { twMerge } from "tailwind-merge";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

const variantStyles = {
  error: "bg-red-100 text-[hsl(var(--text-error))]",
  warning: "bg-orange-100 text-[hsl(var(--text-warning))]",
  info: "bg-sky-100 text-[hsl(var(--text-info))]",
  success: "bg-green-100 text-[hsl(var(--text-success))]",
};

export const ErrorAlertStandard: React.FC<PropsWithChildren<AlertProps>> = ({
  className,
  description = "{Description}",
  title = "{Title}",
  ...props
}) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.error} ${className}`)}
      description={description}
      icon={<ExclamationCircleIcon className="w-6 h-6 text-red-700" />}
      title={title}
      variant="standard"
      {...props}
    ></Alert>
  );
};

export const WarningAlertStandard: React.FC<PropsWithChildren<AlertProps>> = ({
  className,
  description = "{Description}",
  title = "{Title}",
  ...props
}) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.warning} ${className}`)}
      description={description}
      icon={<ExclamationTriangleIcon className="w-6 h-6 text-orange-700" />}
      title={title}
      variant="standard"
      {...props}
    ></Alert>
  );
};

export const InfoAlertStandard: React.FC<PropsWithChildren<AlertProps>> = ({
  className,
  description = "{Description}",
  title = "{Title}",
  ...props
}) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.info} ${className}`)}
      description={description}
      icon={<InformationCircleIcon className="w-6 h-6 text-sky-700" />}
      title={title}
      variant="standard"
      {...props}
    ></Alert>
  );
};

export const SuccessAlertStandard: React.FC<PropsWithChildren<AlertProps>> = ({
  className,
  description = "{Description}",
  title = "{Title}",
  ...props
}) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.success} ${className}`)}
      description={description}
      icon={<CheckCircleIcon className="w-6 h-6 text-green-800" />}
      title={title}
      variant="standard"
      {...props}
    ></Alert>
  );
};

export const ErrorAlertStandardSimple: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, title = "{Title}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.error} ${className}`)}
      icon={<ExclamationCircleIcon className="w-6 h-6 text-red-700" />}
      title={title}
      variant="standard"
      {...props}
    ></Alert>
  );
};

export const WarningAlertStandardSimple: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, title = "{Title}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.warning} ${className}`)}
      icon={<ExclamationTriangleIcon className="w-6 h-6 text-orange-700" />}
      title={title}
      variant="standard"
      {...props}
    ></Alert>
  );
};

export const InfoAlertStandardSimple: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, title = "{Title}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.info} ${className}`)}
      icon={<InformationCircleIcon className="w-6 h-6 text-sky-700" />}
      title={title}
      variant="standard"
      {...props}
    ></Alert>
  );
};

export const SuccessAlertStandardSimple: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, title = "{Title}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.success} ${className}`)}
      icon={<CheckCircleIcon className="w-6 h-6 text-green-800" />}
      title={title}
      variant="standard"
      {...props}
    ></Alert>
  );
};

export const ErrorAlertStandardClose: React.FC<
  PropsWithChildren<AlertProps>
> = ({
  className,
  description = "{Description}",
  title = "{Title}",
  ...props
}) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.error} ${className}`)}
      close={true}
      description={description}
      icon={<ExclamationCircleIcon className="w-6 h-6 text-red-700" />}
      title={title}
      variant="standard"
      {...props}
    ></Alert>
  );
};

export const WarningAlertStandardClose: React.FC<
  PropsWithChildren<AlertProps>
> = ({
  className,
  description = "{Description}",
  title = "{Title}",
  ...props
}) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.warning} ${className}`)}
      close={true}
      description={description}
      icon={<ExclamationTriangleIcon className="w-6 h-6 text-orange-700" />}
      title={title}
      variant="standard"
      {...props}
    ></Alert>
  );
};

export const InfoAlertStandardClose: React.FC<
  PropsWithChildren<AlertProps>
> = ({
  className,
  description = "{Description}",
  title = "{Title}",
  ...props
}) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.info} ${className}`)}
      close={true}
      description={description}
      icon={<InformationCircleIcon className="w-6 h-6 text-sky-700" />}
      title={title}
      variant="standard"
      {...props}
    ></Alert>
  );
};

export const SuccessAlertStandardClose: React.FC<
  PropsWithChildren<AlertProps>
> = ({
  className,
  description = "{Description}",
  title = "{Title}",
  ...props
}) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.success} ${className}`)}
      close={true}
      description={description}
      icon={<CheckCircleIcon className="w-6 h-6 text-green-800" />}
      title={title}
      variant="standard"
      {...props}
    ></Alert>
  );
};

export const ErrorAlertStandardSimpleClose: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, title = "{Title}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.error} ${className}`)}
      close={true}
      icon={<ExclamationCircleIcon className="w-6 h-6 text-red-700" />}
      title={title}
      variant="standard"
      {...props}
    ></Alert>
  );
};

export const WarningAlertStandardSimpleClose: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, title = "{Title}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.warning} ${className}`)}
      close={true}
      icon={<ExclamationTriangleIcon className="w-6 h-6 text-orange-700" />}
      title={title}
      variant="standard"
      {...props}
    ></Alert>
  );
};

export const InfoAlertStandardSimpleClose: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, title = "{Title}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.info} ${className}`)}
      close={true}
      icon={<InformationCircleIcon className="w-6 h-6 text-sky-700" />}
      title={title}
      variant="standard"
      {...props}
    ></Alert>
  );
};

export const SuccessAlertStandardSimpleClose: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, title = "{Title}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.success} ${className}`)}
      close={true}
      icon={<CheckCircleIcon className="w-6 h-6 text-green-800" />}
      title={title}
      variant="standard"
      {...props}
    ></Alert>
  );
};