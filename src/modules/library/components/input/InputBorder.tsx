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

export const InputBorderSm: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.default} ${className}`)}
      variant="border"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputBorderHoverSm: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      variant="border"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputBorderActiveSm: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.active} ${className}`)}
      variant="border"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputBorderDisabledSm: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      variant="border"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputBorderLg: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.default} ${className}`)}
      variant="border"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputBorderHoverLg: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      variant="border"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputBorderActiveLg: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.active} ${className}`)}
      variant="border"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputBorderDisabledLg: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      variant="border"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputBorderNm: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      border="normal"
      className={twMerge(`${variantStyles.default} ${className}`)}
      variant="border"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputBorderHoverNm: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      border="normal"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      variant="border"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputBorderActiveNm: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      border="normal"
      className={twMerge(`${variantStyles.active} ${className}`)}
      variant="border"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputBorderDisabledNm: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      border="normal"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      variant="border"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputBorderSmIcon: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.default} ${className}`)}
      variant="border"
      {...props}
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
    >
      {children}
    </Input>
  );
};

export const InputBorderHoverSmIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      variant="border"
      {...props}
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
    >
      {children}
    </Input>
  );
};

export const InputBorderActiveSmIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.active} ${className}`)}
      variant="border"
      {...props}
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
    >
      {children}
    </Input>
  );
};

export const InputBorderDisabledSmIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      iconColor="text-[hsl(var(--icon-color-disabled))]"
      showIcon={true}
      variant="border"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputBorderLgIcon: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.default} ${className}`)}
      variant="border"
      {...props}
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
    >
      {children}
    </Input>
  );
};

export const InputBorderHoverLgIcon: React.FC<
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

export const InputBorderActiveLgIcon: React.FC<
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

export const InputBorderDisabledLgIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      iconColor="text-[hsl(var(--icon-color-disabled))]"
      showIcon={true}
      variant="border"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputBorderNmIcon: React.FC<PropsWithChildren<InputProps>> = ({
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

export const InputBorderHoverNmIcon: React.FC<
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

export const InputBorderActiveNmIcon: React.FC<
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

export const InputBorderDisabledNmIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      border="normal"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      iconColor="text-[hsl(var(--icon-color-disabled))]"
      showIcon={true}
      variant="border"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputBorderSmError: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.default} ${className}`)}
      variant="border"
      {...props}
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputBorderHoverSmError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      variant="border"
      {...props}
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputBorderActiveSmError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.active} ${className}`)}
      variant="border"
      {...props}
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputBorderDisabledSmError: React.FC<
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

export const InputBorderLgError: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.default} ${className}`)}
      variant="border"
      {...props}
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputBorderHoverLgError: React.FC<
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

export const InputBorderActiveLgError: React.FC<
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

export const InputBorderDisabledLgError: React.FC<
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

export const InputBorderNmError: React.FC<PropsWithChildren<InputProps>> = ({
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
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputBorderHoverNmError: React.FC<
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

export const InputBorderActiveNmError: React.FC<
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

export const InputBorderDisabledNmError: React.FC<
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

export const InputBorderSmIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.default} ${className}`)}
      variant="border"
      {...props}
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputBorderHoverSmIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      variant="border"
      {...props}
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputBorderActiveSmIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      border="small"
      className={twMerge(`${variantStyles.active} ${className}`)}
      variant="border"
      {...props}
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputBorderDisabledSmIconError: React.FC<
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

export const InputBorderLgIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      border="large"
      className={twMerge(`${variantStyles.default} ${className}`)}
      variant="border"
      {...props}
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputBorderHoverLgIconError: React.FC<
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

export const InputBorderActiveLgIconError: React.FC<
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

export const InputBorderDisabledLgIconError: React.FC<
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

export const InputBorderNmIconError: React.FC<
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

export const InputBorderHoverNmIconError: React.FC<
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

export const InputBorderActiveNmIconError: React.FC<
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

export const InputBorderDisabledNmIconError: React.FC<
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

export const LabeledInputBorderHelperSm: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.default} ${className}`)}
      variant="border"
      {...props}
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperSmHover: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      variant="border"
      {...props}
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperSmActive: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.active} ${className}`)}
      variant="border"
      {...props}
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperSmDisabled: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      helperText={helperText}
      label={label}
      variant="border"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperLg: React.FC<
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
      border="large"
      className={twMerge(`${variantStyles.default} ${className}`)}
      variant="border"
      {...props}
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperLgHover: React.FC<
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

export const LabeledInputBorderHelperLgActive: React.FC<
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

export const LabeledInputBorderHelperLgDisabled: React.FC<
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
      border="large"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      helperText={helperText}
      label={label}
      variant="border"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperNm: React.FC<
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

export const LabeledInputBorderHelperNmHover: React.FC<
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

export const LabeledInputBorderHelperNmActive: React.FC<
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

export const LabeledInputBorderHelperNmDisabled: React.FC<
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
      border="normal"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      helperText={helperText}
      label={label}
      variant="border"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperSmIcon: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.default} ${className}`)}
      variant="border"
      {...props}
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperSmHoverIcon: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      variant="border"
      {...props}
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperSmActiveIcon: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.active} ${className}`)}
      variant="border"
      {...props}
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperSmDisabledIcon: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      helperText={helperText}
      iconColor="text-[hsl(var(--icon-color-disabled))]"
      label={label}
      showIcon={true}
      variant="border"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperLgIcon: React.FC<
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
      border="large"
      className={twMerge(`${variantStyles.default} ${className}`)}
      variant="border"
      {...props}
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperLgHoverIcon: React.FC<
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
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperLgActiveIcon: React.FC<
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
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperLgDisabledIcon: React.FC<
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
      border="large"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      helperText={helperText}
      iconColor="text-[hsl(var(--icon-color-disabled))]"
      label={label}
      showIcon={true}
      variant="border"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperNmIcon: React.FC<
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
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperNmHoverIcon: React.FC<
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
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperNmActiveIcon: React.FC<
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
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperNmDisabledIcon: React.FC<
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
      border="normal"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      helperText={helperText}
      iconColor="text-[hsl(var(--icon-color-disabled))]"
      label={label}
      showIcon={true}
      variant="border"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperSmIconError: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.default} ${className}`)}
      variant="border"
      {...props}
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

export const LabeledInputBorderHelperSmHoverIconError: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      variant="border"
      {...props}
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

export const LabeledInputBorderHelperSmActiveIconError: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.active} ${className}`)}
      variant="border"
      {...props}
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

export const LabeledInputBorderHelperSmDisabledIconError: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      helperText={helperText}
      iconColor="text-[hsl(var(--icon-color-disabled))]"
      label={label}
      showIcon={true}
      variant="border"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperLgIconError: React.FC<
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
      border="large"
      className={twMerge(`${variantStyles.default} ${className}`)}
      variant="border"
      {...props}
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

export const LabeledInputBorderHelperLgHoverIconError: React.FC<
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

export const LabeledInputBorderHelperLgActiveIconError: React.FC<
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

export const LabeledInputBorderHelperLgDisabledIconError: React.FC<
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
      border="large"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      helperText={helperText}
      iconColor="text-[hsl(var(--icon-color-disabled))]"
      label={label}
      showIcon={true}
      variant="border"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputBorderHelperNmIconError: React.FC<
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

export const LabeledInputBorderHelperNmHoverIconError: React.FC<
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

export const LabeledInputBorderHelperNmActiveIconError: React.FC<
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

export const LabeledInputBorderHelperNmDisabledIconError: React.FC<
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
      border="normal"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      helperText={helperText}
      iconColor="text-[hsl(var(--icon-color-disabled))]"
      label={label}
      showIcon={true}
      variant="border"
      {...props}
    >
      {children}
    </Input>
  );
};
