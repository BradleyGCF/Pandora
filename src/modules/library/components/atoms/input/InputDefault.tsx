import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { Input, InputProps } from "./Input";
import { UserIcon } from "@heroicons/react/24/solid";

const variantStyles = {
  default:
    "bg-[hsl(var(--background-color))] border-1 outline-none ring-1 ring-[#e0e0e0] text-[hsl(var(--text-color-disabled))] w-[var(--input-width)] h-[var(--input-height)] p-[var(--input-padding)]",
  hover:
    "bg-[hsl(var(--background-color))] hover:ring-[hsl(var(--hover-border-default))] border-1 outline-none ring-1 ring-[#e0e0e0] text-black w-[var(--input-width)] h-[var(--input-height)] p-[var(--input-padding)]",
  active:
    "bg-[hsl(var(--background-color))] border-1 outline-none ring-1 ring-[#e0e0e0] text-black w-[var(--input-width)] h-[var(--input-height)] p-[var(--input-padding)]",
  disabled:
    "bg-[hsl(var(--background-color))] text-[hsl(var(--text-color-disabled))] outline-none w-[var(--input-width)] h-[var(--input-height)] p-[var(--input-padding)]",
};

export const InputDefSm: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.default} ${className}`)}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefHoverSm: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefActiveSm: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.active} ${className}`)}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefDisabledSm: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefLg: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.default} ${className}`)}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefHoverLg: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefActiveLg: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.active} ${className}`)}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefDisabledLg: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefNm: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="normal"
      className={twMerge(`${variantStyles.default} ${className}`)}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefHoverNm: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="normal"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefActiveNm: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="normal"
      className={twMerge(`${variantStyles.active} ${className}`)}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefDisabledNm: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="normal"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefSmIcon: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  icon,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.default} ${className}`)}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefHoverSmIcon: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  icon,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefActiveSmIcon: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  icon,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.active} ${className}`)}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefDisabledSmIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, icon, type = "text", ...props }) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      icon={icon || <UserIcon className="w-5 h-5 text-gray-500" />}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefLgIcon: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  icon,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.default} ${className}`)}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefHoverLgIcon: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  icon,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefActiveLgIcon: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  icon,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.active} ${className}`)}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefDisabledLgIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, icon, type = "text", ...props }) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      icon={icon || <UserIcon className="w-5 h-5 text-gray-500" />}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefNmIcon: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  icon,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="normal"
      className={twMerge(`${variantStyles.default} ${className}`)}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefHoverNmIcon: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  icon,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="normal"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefActiveNmIcon: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  icon,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="normal"
      className={twMerge(`${variantStyles.active} ${className}`)}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />} 
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefDisabledNmIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, icon, type = "text", ...props }) => {
  return (
    <Input
      border="normal"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      icon={icon || <UserIcon className="w-5 h-5 text-gray-500" />} 
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefSmError: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.default} ${className}`)}
      error={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefHoverSmError: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      error={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefActiveSmError: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.active} ${className}`)}
      error={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefDisabledSmError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, type = "text", ...props }) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.disabled} ${className} ring-1`)}
      disabled
      error={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefLgError: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.default} ${className}`)}
      error={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefHoverLgError: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      error={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefActiveLgError: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.active} ${className}`)}
      error={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefDisabledLgError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, type = "text", ...props }) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.disabled} ${className} ring-1`)}
      disabled
      error={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefNmError: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="normal"
      className={twMerge(`${variantStyles.default} ${className}`)}
      error={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefHoverNmError: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="normal"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      error={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefActiveNmError: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="normal"
      className={twMerge(`${variantStyles.active} ${className}`)}
      error={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefDisabledNmError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, type = "text", ...props }) => {
  return (
    <Input
      border="normal"
      className={twMerge(`${variantStyles.disabled} ${className} ring-1`)}
      disabled
      error={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefSmIconError: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  icon,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.default} ${className}`)}
      error={true}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />} 
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefHoverSmIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, icon, type = "text", ...props }) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      error={true}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />} 
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefActiveSmIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, icon, type = "text", ...props }) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.active} ${className}`)}
      error={true}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />} 
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefDisabledSmIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, icon, type = "text", ...props }) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.disabled} ${className} ring-1`)}
      disabled
      error={true}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-500" />} 
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefLgIconError: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  icon,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.default} ${className}`)}
      error={true}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />} 
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefHoverLgIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, icon, type = "text", ...props }) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      error={true}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />} 
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefActiveLgIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, icon, type = "text", ...props }) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.active} ${className}`)}
      error={true}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />} 
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefDisabledLgIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, icon, type = "text", ...props }) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.disabled} ${className} ring-1`)}
      disabled
      error={true}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-500" />} 
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefNmIconError: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  icon,
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="normal"
      className={twMerge(`${variantStyles.default} ${className}`)}
      error={true}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />} 
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefHoverNmIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, icon, type = "text", ...props }) => {
  return (
    <Input
      border="normal"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      error={true}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />} 
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefActiveNmIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, icon, type = "text", ...props }) => {
  return (
    <Input
      border="normal"
      className={twMerge(`${variantStyles.active} ${className}`)}
      error={true}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />} 
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputDefDisabledNmIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, icon, type = "text", ...props }) => {
  return (
    <Input
      border="normal"
      className={twMerge(`${variantStyles.disabled} ${className} ring-1`)}
      disabled
      error={true}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-500" />} 
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperSm: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.default} ${className}`)}
      helperText={helperText}
      label={label}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperSmHover: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      helperText={helperText}
      label={label}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperSmActive: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.active} ${className}`)}
      helperText={helperText}
      label={label}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperSmDisabled: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      helperText={helperText}
      label={label}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperLg: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.default} ${className}`)}
      helperText={helperText}
      label={label}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperLgHover: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      helperText={helperText}
      label={label}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperLgActive: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.active} ${className}`)}
      helperText={helperText}
      label={label}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperLgDisabled: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      helperText={helperText}
      label={label}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperNm: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="normal"
      className={twMerge(`${variantStyles.default} ${className}`)}
      helperText={helperText}
      label={label}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperNmHover: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="normal"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      helperText={helperText}
      label={label}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperNmActive: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      {...props}
      border="normal"
      className={twMerge(`${variantStyles.active} ${className}`)}
      helperText={helperText}
      label={label}
      type={type}
      variant="default"
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperNmDisabled: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="normal"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      helperText={helperText}
      label={label}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperSmIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  icon,
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.default} ${className}`)}
      helperText={helperText}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />} 
      label={label}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperSmHoverIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  icon,
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      helperText={helperText}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />} 
      label={label}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperSmActiveIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  icon,
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.active} ${className}`)}
      helperText={helperText}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />} 
      label={label}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperSmDisabledIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  icon,
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      helperText={helperText}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />} 
      label={label}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperLgIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  icon,
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
    border="large"
    className={twMerge(`${variantStyles.default} ${className}`)}
    helperText={helperText}
    icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />} 
    label={label}
    showIcon={true}
    type={type}
    variant="default"
    {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperLgHoverIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  icon,
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      helperText={helperText}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />} 
      label={label}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperLgActiveIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  icon,
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.active} ${className}`)}
      helperText={helperText}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />} 
      label={label}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperLgDisabledIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  icon,
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      helperText={helperText}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-500" />} 
      label={label}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperNmIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  icon,
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="normal"
      className={twMerge(`${variantStyles.default} ${className}`)}
      helperText={helperText}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />}
      label={label}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperNmHoverIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  icon,
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="normal"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      helperText={helperText}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />}
      label={label}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperNmActiveIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  icon,
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="normal"
      className={twMerge(`${variantStyles.active} ${className}`)}
      helperText={helperText}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />} 
      label={label}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperNmDisabledIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  icon,
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="normal"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      helperText={helperText}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-500" />} 
      label={label}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperSmIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  icon,
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.default} ${className}`)}
      error={true}
      helperText={helperText}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />} 
      label={label}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperSmHoverIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  icon,
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      error={true}
      helperText={helperText}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />} 
      label={label}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperSmActiveIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  icon,
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.active} ${className}`)}
      error={true}
      helperText={helperText}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />} 
      label={label}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperSmDisabledIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  icon,
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      helperText={helperText}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-500" />} 
      label={label}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperLgIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  icon,
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.default} ${className}`)}
      error={true}
      helperText={helperText}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />} 
      label={label}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperLgHoverIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  icon,
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      error={true}
      helperText={helperText}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />} 
      label={label}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperLgActiveIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  icon,
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.active} ${className}`)}
      error={true}
      helperText={helperText}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />} 
      label={label}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperLgDisabledIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  icon,
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      helperText={helperText}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-500" />} 
      label={label}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperNmIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  icon,
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="normal"
      className={twMerge(`${variantStyles.default} ${className}`)}
      error={true}
      helperText={helperText}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />} 
      label={label}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperNmHoverIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  icon,
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="normal"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      error={true}
      helperText={helperText}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />} 
      label={label}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperNmActiveIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  icon,
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="normal"
      className={twMerge(`${variantStyles.active} ${className}`)}
      error={true}
      helperText={helperText}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />} 
      label={label}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperNmDisabledIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  icon,
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      border="normal"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      helperText={helperText}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-500" />} 
      label={label}
      showIcon={true}
      type={type}
      variant="default"
      {...props}
    >
      {children}
    </Input>
  );
};
