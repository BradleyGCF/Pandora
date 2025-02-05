import { PropsWithChildren } from "react";
import { Alert, AlertProps } from "./Alert";
import { twMerge } from "tailwind-merge";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const variantStyles = {
  error: "bg-red-700 text-white",
  warning: "bg-orange-700 text-white",
  info: "bg-sky-700 text-white",
  success: "bg-green-800 text-white",
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
      icon={<ExclamationCircleIcon className="w-6 h-6 text-white" />}
      title={title}
      variant="filled"
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
      icon={<ExclamationTriangleIcon className="w-6 h-6 text-white" />}
      title={title}
      variant="filled"
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
      icon={<InformationCircleIcon className="w-6 h-6 text-white" />}
      title={title}
      variant="filled"
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
      icon={<CheckCircleIcon className="w-6 h-6 text-white" />}
      title={title}
      variant="filled"
      {...props}
    ></Alert>
  );
};

export const ErrorAlertSimple: React.FC<PropsWithChildren<AlertProps>> = ({
  className,
  title = "{Title}",
  ...props
}) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.error} ${className}`)}
      icon={<ExclamationCircleIcon className="w-6 h-6 text-white" />}
      title={title}
      variant="filled"
      {...props}
    ></Alert>
  );
};

export const WarningAlertSimple: React.FC<PropsWithChildren<AlertProps>> = ({
  className,
  title = "{Title}",
  ...props
}) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.warning} ${className}`)}
      icon={<ExclamationTriangleIcon className="w-6 h-6 text-white" />}
      title={title}
      variant="filled"
      {...props}
    ></Alert>
  );
};

export const InfoAlertSimple: React.FC<PropsWithChildren<AlertProps>> = ({
  className,
  title = "{Title}",
  ...props
}) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.info} ${className}`)}
      icon={<InformationCircleIcon className="w-6 h-6 text-white" />}
      title={title}
      variant="filled"
      {...props}
    ></Alert>
  );
};

export const SuccessAlertSimple: React.FC<PropsWithChildren<AlertProps>> = ({
  className,
  title = "{Title}",
  ...props
}) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.success} ${className}`)}
      icon={<CheckCircleIcon className="w-6 h-6 text-white" />}
      title={title}
      variant="filled"
      {...props}
    ></Alert>
  );
};

export const ErrorAlertClose: React.FC<PropsWithChildren<AlertProps>> = ({
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
      icon={<ExclamationCircleIcon className="w-6 h-6 text-white" />}
      title={title}
      variant="filled"
      {...props}
    ></Alert>
  );
};

export const WarningAlertClose: React.FC<PropsWithChildren<AlertProps>> = ({
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
      icon={<ExclamationTriangleIcon className="w-6 h-6 text-white" />}
      title={title}
      variant="filled"
      {...props}
    ></Alert>
  );
};

export const InfoAlertClose: React.FC<PropsWithChildren<AlertProps>> = ({
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
      icon={<InformationCircleIcon className="w-6 h-6 text-white" />}
      title={title}
      variant="filled"
      {...props}
    ></Alert>
  );
};

export const SuccessAlertClose: React.FC<PropsWithChildren<AlertProps>> = ({
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
      icon={<CheckCircleIcon className="w-6 h-6 text-white" />}
      title={title}
      variant="filled"
      {...props}
    ></Alert>
  );
};

export const ErrorAlertSimpleClose: React.FC<PropsWithChildren<AlertProps>> = ({
  className,
  title = "{Title}",
  ...props
}) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.error} ${className}`)}
      close={true}
      icon={<ExclamationCircleIcon className="w-6 h-6 text-white" />}
      title={title}
      variant="filled"
      {...props}
    ></Alert>
  );
};

export const WarningAlertSimpleClose: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, title = "{Title}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.warning} ${className}`)}
      close={true}
      icon={<ExclamationTriangleIcon className="w-6 h-6 text-white" />}
      title={title}
      variant="filled"
      {...props}
    ></Alert>
  );
};

export const InfoAlertSimpleClose: React.FC<PropsWithChildren<AlertProps>> = ({
  className,
  title = "{Title}",
  ...props
}) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.info} ${className}`)}
      close={true}
      icon={<InformationCircleIcon className="w-6 h-6 text-white" />}
      title={title}
      variant="filled"
      {...props}
    ></Alert>
  );
};

export const SuccessAlertSimpleClose: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, title = "{Title}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.success} ${className}`)}
      close={true}
      icon={<CheckCircleIcon className="w-6 h-6 text-white" />}
      title={title}
      variant="filled"
      {...props}
    ></Alert>
  );
};

export const ErrorAlertDescription: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, description = "{Description}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.error} ${className}`)}
      description={description}
      icon={<ExclamationCircleIcon className="w-6 h-6 text-white" />}
      variant="filled"
      {...props}
    ></Alert>
  );
};

export const WarningAlertDescription: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, description = "{Description}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.warning} ${className}`)}
      description={description}
      icon={<ExclamationTriangleIcon className="w-6 h-6 text-white" />}
      variant="filled"
      {...props}
    ></Alert>
  );
};

export const InfoAlertDescription: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, description = "{Description}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.info} ${className}`)}
      description={description}
      icon={<InformationCircleIcon className="w-6 h-6 text-white" />}
      variant="filled"
      {...props}
    ></Alert>
  );
};

export const SuccessAlertDescription: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, description = "{Description}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.success} ${className}`)}
      description={description}
      icon={<CheckCircleIcon className="w-6 h-6 text-white" />}
      variant="filled"
      {...props}
    ></Alert>
  );
};

export const ErrorAlertDescriptionClose: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, description = "{Description}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.error} ${className}`)}
      close={true}
      description={description}
      icon={<ExclamationCircleIcon className="w-6 h-6 text-white" />}
      variant="filled"
      {...props}
    ></Alert>
  );
};

export const WarningAlertDescriptionClose: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, description = "{Description}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.warning} ${className}`)}
      close={true}
      description={description}
      icon={<ExclamationTriangleIcon className="w-6 h-6 text-white" />}
      variant="filled"
      {...props}
    ></Alert>
  );
};

export const InfoAlertDescriptionClose: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, description = "{Description}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.info} ${className}`)}
      close={true}
      description={description}
      icon={<InformationCircleIcon className="w-6 h-6 text-white" />}
      variant="filled"
      {...props}
    ></Alert>
  );
};

export const SuccessAlertDescriptionClose: React.FC<
  PropsWithChildren<AlertProps>
> = ({ className, description = "{Description}", ...props }) => {
  return (
    <Alert
      className={twMerge(`${variantStyles.success} ${className}`)}
      close={true}
      description={description}
      icon={<CheckCircleIcon className="w-6 h-6 text-white" />}
      variant="filled"
      {...props}
    ></Alert>
  );
};
