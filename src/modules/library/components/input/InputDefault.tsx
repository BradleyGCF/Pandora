import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { Input, InputProps } from "./Input";

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

export const InputDefaultSmall: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="small"
    >
      {children}
    </Input>
  );
};

export const InputDefaultHoverSmall: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="small"
    >
      {children}
    </Input>
  );
};

export const InputDefaultActiveSmall: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="small"
    >
      {children}
    </Input>
  );
};

export const InputDefaultDisabledSmall: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="small"
    >
      {children}
    </Input>
  );
};

export const InputDefaultLarge: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="large"
    >
      {children}
    </Input>
  );
};

export const InputDefaultHoverLarge: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="large"
    >
      {children}
    </Input>
  );
};

export const InputDefaultActiveLarge: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="large"
    >
      {children}
    </Input>
  );
};

export const InputDefaultDisabledLarge: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="large"
    >
      {children}
    </Input>
  );
};

export const InputDefaultNormal: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="normal"
    >
      {children}
    </Input>
  );
};

export const InputDefaultHoverNormal: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="normal"
    >
      {children}
    </Input>
  );
};

export const InputDefaultActiveNormal: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="normal"
    >
      {children}
    </Input>
  );
};

export const InputDefaultDisabledNormal: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="normal"
    >
      {children}
    </Input>
  );
};

export const InputDefaultSmallIcon: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="small"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
    >
      {children}
    </Input>
  );
};

export const InputDefaultHoverSmallIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="small"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
    >
      {children}
    </Input>
  );
};

export const InputDefaultActiveSmallIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="small"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
    >
      {children}
    </Input>
  );
};

export const InputDefaultDisabledSmallIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="small"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color-disabled))]"
    >
      {children}
    </Input>
  );
};

export const InputDefaultLargeIcon: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="large"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
    >
      {children}
    </Input>
  );
};

export const InputDefaultHoverLargeIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="large"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
    >
      {children}
    </Input>
  );
};

export const InputDefaultActiveLargeIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="large"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
    >
      {children}
    </Input>
  );
};

export const InputDefaultDisabledLargeIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="large"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color-disabled))]"
    >
      {children}
    </Input>
  );
};

export const InputDefaultNormalIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="normal"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
    >
      {children}
    </Input>
  );
};

export const InputDefaultHoverNormalIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="normal"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
    >
      {children}
    </Input>
  );
};

export const InputDefaultActiveNormalIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="normal"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
    >
      {children}
    </Input>
  );
};

export const InputDefaultDisabledNormalIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="normal"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color-disabled))]"
    >
      {children}
    </Input>
  );
};

export const InputDefaultSmallError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="small"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputDefaultHoverSmallError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="small"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputDefaultActiveSmallError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="small"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputDefaultDisabledSmallError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.disabled} ${className} ring-1`)}
      border="small"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputDefaultLargeError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="large"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputDefaultHoverLargeError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="large"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputDefaultActiveLargeError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="large"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputDefaultDisabledLargeError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.disabled} ${className} ring-1`)}
      border="large"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputDefaultNormalError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="normal"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputDefaultHoverNormalError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="normal"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputDefaultActiveNormalError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="normal"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputDefaultDisabledNormalError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.disabled} ${className} ring-1`)}
      border="normal"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputDefaultSmallIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="small"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputDefaultHoverSmallIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="small"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputDefaultActiveSmallIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="small"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputDefaultDisabledSmallIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.disabled} ${className} ring-1`)}
      border="small"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color-disabled))]"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputDefaultLargeIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="large"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputDefaultHoverLargeIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="large"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputDefaultActiveLargeIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="large"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputDefaultDisabledLargeIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.disabled} ${className} ring-1`)}
      border="large"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color-disabled))]"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputDefaultNormalIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="normal"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputDefaultHoverNormalIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="normal"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputDefaultActiveNormalIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="normal"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputDefaultDisabledNormalIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.disabled} ${className} ring-1`)}
      border="normal"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color-disabled))]"
      error={true}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextSmall: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  label = "Input Label",
  helperText = "Input Helper Text",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="small"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextSmallHover: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  label = "Input Label",
  helperText = "Input Helper Text",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="small"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextSmallActive: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  label = "Input Label",
  helperText = "Input Helper Text",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="small"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextSmallDisabled: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  label = "Input Label",
  helperText = "Input Helper Text",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="small"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextLarge: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  label = "Input Label",
  helperText = "Input Helper Text",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="large"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextLargeHover: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  label = "Input Label",
  helperText = "Input Helper Text",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="large"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextLargeActive: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  label = "Input Label",
  helperText = "Input Helper Text",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="large"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextLargeDisabled: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  label = "Input Label",
  helperText = "Input Helper Text",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="large"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextNormal: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  label = "Input Label",
  helperText = "Input Helper Text",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="normal"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextNormalHover: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  label = "Input Label",
  helperText = "Input Helper Text",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="normal"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextNormalActive: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  label = "Input Label",
  helperText = "Input Helper Text",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="normal"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextNormalDisabled: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  label = "Input Label",
  helperText = "Input Helper Text",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="normal"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextSmallIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="small"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextSmallHoverIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="small"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextSmallActiveIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="small"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextSmallDisabledIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="small"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color-disabled))]"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextLargeIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="large"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextLargeHoverIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="large"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextLargeActiveIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="large"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextLargeDisabledIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="large"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color-disabled))]"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextNormalIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="normal"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextNormalHoverIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="normal"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextNormalActiveIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="normal"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextNormalDisabledIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="normal"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color-disabled))]"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextSmallIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="small"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      label={label}
      helperText={helperText}
      error={true}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextSmallHoverIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="small"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      label={label}
      helperText={helperText}
      error={true}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextSmallActiveIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="small"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      label={label}
      helperText={helperText}
      error={true}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextSmallDisabledIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="small"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color-disabled))]"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextLargeIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="large"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      label={label}
      helperText={helperText}
      error={true}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextLargeHoverIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="large"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      label={label}
      helperText={helperText}
      error={true}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextLargeActiveIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="large"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      label={label}
      helperText={helperText}
      error={true}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextLargeDisabledIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="large"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color-disabled))]"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextNormalIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="normal"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      label={label}
      helperText={helperText}
      error={true}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextNormalHoverIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="normal"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      label={label}
      helperText={helperText}
      error={true}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextNormalActiveIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="normal"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      label={label}
      helperText={helperText}
      error={true}
    >
      {children}
    </Input>
  );
};

export const LabeledInputHelperTextNormalDisabledIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="default"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="normal"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color-disabled))]"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};