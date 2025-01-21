import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { Input, InputProps } from "./Input";

const variantStyles = {
  default:
    "border-1 outline-none ring-1 ring-[#e0e0e0] text-[hsl(var(--text-color-disabled))] w-[var(--input-width)] h-[var(--input-height)] p-[var(--input-padding)]",
  hover:
    "hover:ring-[hsl(var(--hover-border-default))] border-1 outline-none ring-1 ring-[#e0e0e0] text-black w-[var(--input-width)] h-[var(--input-height)] p-[var(--input-padding)]",
  active:
    "border-1 outline-none ring-1 ring-[#e0e0e0] text-black w-[var(--input-width)] h-[var(--input-height)] p-[var(--input-padding)]",
  disabled:
    "text-[hsl(var(--text-color-disabled))] w-[var(--input-width)] h-[var(--input-height)] p-[var(--input-padding)] border-1 outline-none ring-1 ring-[#e0e0e0]",
};

export const InputBorderSmall: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="small"
    >
      {children}
    </Input>
  );
};

export const InputBorderHoverSmall: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="small"
    >
      {children}
    </Input>
  );
};

export const InputBorderActiveSmall: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="small"
    >
      {children}
    </Input>
  );
};

export const InputBorderDisabledSmall: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="small"
    >
      {children}
    </Input>
  );
};

export const InputBorderLarge: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="large"
    >
      {children}
    </Input>
  );
};

export const InputBorderHoverLarge: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="large"
    >
      {children}
    </Input>
  );
};

export const InputBorderActiveLarge: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="large"
    >
      {children}
    </Input>
  );
};

export const InputBorderDisabledLarge: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="large"
    >
      {children}
    </Input>
  );
};

export const InputBorderNormal: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="normal"
    >
      {children}
    </Input>
  );
};

export const InputBorderHoverNormal: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="normal"
    >
      {children}
    </Input>
  );
};

export const InputBorderActiveNormal: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="normal"
    >
      {children}
    </Input>
  );
};

export const InputBorderDisabledNormal: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="normal"
    >
      {children}
    </Input>
  );
};

export const InputBorderSmallIcon: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="small"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
    >
      {children}
    </Input>
  );
};

export const InputBorderHoverSmallIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="small"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
    >
      {children}
    </Input>
  );
};

export const InputBorderActiveSmallIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="small"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
    >
      {children}
    </Input>
  );
};

export const InputBorderDisabledSmallIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="small"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color-disabled))]"
    >
      {children}
    </Input>
  );
};

export const InputBorderLargeIcon: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="large"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
    >
      {children}
    </Input>
  );
};

export const InputBorderHoverLargeIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="large"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
    >
      {children}
    </Input>
  );
};

export const InputBorderActiveLargeIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="large"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
    >
      {children}
    </Input>
  );
};

export const InputBorderDisabledLargeIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="large"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color-disabled))]"
    >
      {children}
    </Input>
  );
};

export const InputBorderNormalIcon: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="normal"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
    >
      {children}
    </Input>
  );
};

export const InputBorderHoverNormalIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="normal"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
    >
      {children}
    </Input>
  );
};

export const InputBorderActiveNormalIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="normal"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
    >
      {children}
    </Input>
  );
};

export const InputBorderDisabledNormalIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="normal"
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color-disabled))]"
    >
      {children}
    </Input>
  );
};

export const InputBorderSmallError: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="small"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputBorderHoverSmallError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="small"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputBorderActiveSmallError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="small"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputBorderDisabledSmallError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.disabled} ${className} ring-1`)}
      border="small"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputBorderLargeError: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="large"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputBorderHoverLargeError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="large"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputBorderActiveLargeError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="large"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputBorderDisabledLargeError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.disabled} ${className} ring-1`)}
      border="large"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputBorderNormalError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="normal"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputBorderHoverNormalError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="normal"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputBorderActiveNormalError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="normal"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputBorderDisabledNormalError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
      className={twMerge(`${variantStyles.disabled} ${className} ring-1`)}
      border="normal"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputBorderSmallIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
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

export const InputBorderHoverSmallIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
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

export const InputBorderActiveSmallIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
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

export const InputBorderDisabledSmallIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
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

export const InputBorderLargeIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
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

export const InputBorderHoverLargeIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
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

export const InputBorderActiveLargeIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
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

export const InputBorderDisabledLargeIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
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

export const InputBorderNormalIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
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

export const InputBorderHoverNormalIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
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

export const InputBorderActiveNormalIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
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

export const InputBorderDisabledNormalIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="border"
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

export const LabeledInputBorderHelperTextSmall: React.FC<
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
      variant="border"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="small"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperTextSmallHover: React.FC<
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
      variant="border"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="small"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperTextSmallActive: React.FC<
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
      variant="border"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="small"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperTextSmallDisabled: React.FC<
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
      variant="border"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="small"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperTextLarge: React.FC<
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
      variant="border"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="large"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperTextLargeHover: React.FC<
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
      variant="border"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="large"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperTextLargeActive: React.FC<
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
      variant="border"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="large"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperTextLargeDisabled: React.FC<
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
      variant="border"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="large"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperTextNormal: React.FC<
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
      variant="border"
      className={twMerge(`${variantStyles.default} ${className}`)}
      border="normal"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperTextNormalHover: React.FC<
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
      variant="border"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="normal"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperTextNormalActive: React.FC<
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
      variant="border"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="normal"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperTextNormalDisabled: React.FC<
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
      variant="border"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="normal"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperTextSmallIcon: React.FC<
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
      variant="border"
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

export const LabeledInputBorderHelperTextSmallHoverIcon: React.FC<
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
      variant="border"
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

export const LabeledInputBorderHelperTextSmallActiveIcon: React.FC<
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
      variant="border"
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

export const LabeledInputBorderHelperTextSmallDisabledIcon: React.FC<
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
      variant="border"
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
