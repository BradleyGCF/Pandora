import { PropsWithChildren } from "react";
import { Alert, AlertProps } from "./Alert";
import { twMerge } from "tailwind-merge";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const variantStyles = {
  error:
    "border-1 outline-none ring-1 ring-red-700 text-[hsl(var(--text-error))]",
  warning:
    "border-1 outline-none ring-1 ring-orange-700 text-[hsl(var(--text-warning))]",
  info: "border-1 outline-none ring-1 ring-sky-700 text-[hsl(var(--text-info))]",
  success:
    " border-1 outline-none ring-1 ring-green-800 text-[hsl(var(--text-success))]",
};

export const ErrorAlertOutlined: React.FC<PropsWithChildren<AlertProps>> = ({
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
      variant="outlined"
      {...props}
    ></Alert>
  );
};

export const WarningAlertOutlined: React.FC<PropsWithChildren<AlertProps>> = ({
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
      variant="outlined"
      {...props}
    ></Alert>
  );
};

export const InfoAlertOutlined: React.FC<PropsWithChildren<AlertProps>> = ({
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
      variant="outlined"
      {...props}
    ></Alert>
  );
};

export const SuccessAlertOutlined: React.FC<PropsWithChildren<AlertProps>> = ({
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
      variant="outlined"
      {...props}
    ></Alert>
  );
};

export const ErrorAlertOutlinedSimple: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, title = "{Title}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.error} ${className}`)}
      icon={<ExclamationCircleIcon className="w-6 h-6 text-red-700" />}
      title={title}
      variant="outlined"
      {...props}
    ></Alert>
  );
};

export const WarningAlertOutlinedSimple: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, title = "{Title}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.warning} ${className}`)}
      icon={<ExclamationTriangleIcon className="w-6 h-6 text-orange-700" />}
      title={title}
      variant="outlined"
      {...props}
    ></Alert>
  );
};

export const InfoAlertOutlinedSimple: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, title = "{Title}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.info} ${className}`)}
      icon={<InformationCircleIcon className="w-6 h-6 text-sky-700" />}
      title={title}
      variant="outlined"
      {...props}
    ></Alert>
  );
};

export const SuccessAlertOutlinedSimple: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, title = "{Title}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.success} ${className}`)}
      icon={<CheckCircleIcon className="w-6 h-6 text-green-800" />}
      title={title}
      variant="outlined"
      {...props}
    ></Alert>
  );
};

export const ErrorAlertOutlinedClose: React.FC<
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
      variant="outlined"
      {...props}
    ></Alert>
  );
};

export const WarningAlertOutlinedClose: React.FC<
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
      variant="outlined"
      {...props}
    ></Alert>
  );
};

export const InfoAlertOutlinedClose: React.FC<
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
      variant="outlined"
      {...props}
    ></Alert>
  );
};

export const SuccessAlertOutlinedClose: React.FC<
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
      variant="outlined"
      {...props}
    ></Alert>
  );
};

export const ErrorAlertOutlinedSimpleClose: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, title = "{Title}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.error} ${className}`)}
      close={true}
      icon={<ExclamationCircleIcon className="w-6 h-6 text-red-700" />}
      title={title}
      variant="outlined"
      {...props}
    ></Alert>
  );
};

export const WarningAlertOutlinedSimpleClose: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, title = "{Title}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.warning} ${className}`)}
      close={true}
      icon={<ExclamationTriangleIcon className="w-6 h-6 text-orange-700" />}
      title={title}
      variant="outlined"
      {...props}
    ></Alert>
  );
};

export const InfoAlertOutlinedSimpleClose: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, title = "{Title}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.info} ${className}`)}
      close={true}
      icon={<InformationCircleIcon className="w-6 h-6 text-sky-700" />}
      title={title}
      variant="outlined"
      {...props}
    ></Alert>
  );
};

export const SuccessAlertOutlinedSimpleClose: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, title = "{Title}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.success} ${className}`)}
      close={true}
      icon={<CheckCircleIcon className="w-6 h-6 text-green-800" />}
      title={title}
      variant="outlined"
      {...props}
    ></Alert>
  );
};

export const ErrorAlertOutlinedDescription: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, description = "{Description}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.error} ${className}`)}
      icon={<ExclamationCircleIcon className="w-6 h-6 text-red-700" />}
      description={description}
      variant="outlined"
      {...props}
    ></Alert>
  );
};

export const WarningAlertOutlinedDescription: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, description = "{Description}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.warning} ${className}`)}
      icon={<ExclamationTriangleIcon className="w-6 h-6 text-orange-700" />}
      description={description}
      variant="outlined"
      {...props}
    ></Alert>
  );
};

export const InfoAlertOutlinedDescription: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, description = "{Description}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.info} ${className}`)}
      icon={<InformationCircleIcon className="w-6 h-6 text-sky-700" />}
      description={description}
      variant="outlined"
      {...props}
    ></Alert>
  );
};

export const SuccessAlertOutlinedDescription: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, description = "{Description}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.success} ${className}`)}
      icon={<CheckCircleIcon className="w-6 h-6 text-green-800" />}
      description={description}
      variant="outlined"
      {...props}
    ></Alert>
  );
};

export const ErrorAlertOutlinedDescriptionClose: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, description = "{Description}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.error} ${className}`)}
      close={true}
      icon={<ExclamationCircleIcon className="w-6 h-6 text-red-700" />}
      description={description}
      variant="outlined"
      {...props}
    ></Alert>
  );
};

export const WarningAlertOutlinedDescriptionClose: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, description = "{Description}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.warning} ${className}`)}
      close={true}
      icon={<ExclamationTriangleIcon className="w-6 h-6 text-orange-700" />}
      description={description}
      variant="outlined"
      {...props}
    ></Alert>
  );
};

export const InfoAlertOutlinedDescriptionClose: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, description = "{Description}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.info} ${className}`)}
      close={true}
      icon={<InformationCircleIcon className="w-6 h-6 text-sky-700" />}
      description={description}
      variant="outlined"
      {...props}
    ></Alert>
  );
};

export const SuccessAlertOutlinedDescriptionClose: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, description = "{Description}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.success} ${className}`)}
      close={true}
      icon={<CheckCircleIcon className="w-6 h-6 text-green-800" />}
      description={description}
      variant="outlined"
      {...props}
    ></Alert>
  );
};