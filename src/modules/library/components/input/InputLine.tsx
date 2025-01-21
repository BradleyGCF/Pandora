import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { Input, InputProps } from "./Input";

const variantStyles = {
  default:
    "border-b-2 border-borderline p-2 outline-none rounded-none text-[hsl(var(--text-color-disabled))] w-[var(--input-width)] h-[var(--input-height)] ",
  hover:
    "border-b-2 border-borderline p-2 outline-none hover:ring-[hsl(var(--hover-border-default))] rounded-none focus:border-blue-500 text-black w-[var(--input-width)] h-[var(--input-height)] p-[var(--input-padding)] hover:border-[hsl(var(--hover-border-default))] ",
  active:
    "border-b-2 border-borderline p-2 outline-none text-black rounded-none w-[var(--input-width)] h-[var(--input-height)] p-[var(--input-padding)]",
  disabled:
    "border-b-2 border-borderline p-2 outline-none text-[hsl(var(--text-color-disabled))] rounded-none w-[var(--input-width)] h-[var(--input-height)] p-[var(--input-padding)]",
};

export const InputLine: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="line"
      className={twMerge(`${variantStyles.default} ${className}`)}
    >
      {children}
    </Input>
  );
};

export const InputLineHover: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="line"
      className={twMerge(`${variantStyles.hover} ${className}`)}
    >
      {children}
    </Input>
  );
};

export const InputLineActive: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="line"
      className={twMerge(`${variantStyles.active} ${className}`)}
    >
      {children}
    </Input>
  );
};

export const InputLineDisabled: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="line"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
    >
      {children}
    </Input>
  );
};

export const InputLineIcon: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="line"
      className={twMerge(`${variantStyles.default} ${className}`)}
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
    >
      {children}
    </Input>
  );
};

export const InputLineHoverIcon: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="line"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
    >
      {children}
    </Input>
  );
};

export const InputLineActiveIcon: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="line"
      className={twMerge(`${variantStyles.active} ${className}`)}
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
    >
      {children}
    </Input>
  );
};

export const InputLineDisabledIcon: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="line"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color-disabled))]"
    >
      {children}
    </Input>
  );
};

export const InputLineError: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="line"
      className={twMerge(`${variantStyles.default} ${className} border-red-400`)}
    >
      {children}
    </Input>
  );
};

export const InputLineHoverError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="line"
      className={twMerge(`${variantStyles.hover} ${className} border-red-400`)}
    >
      {children}
    </Input>
  );
};

export const InputLineActiveError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="line"
      className={twMerge(`${variantStyles.active} ${className} border-red-400`)}
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputLineDisabledError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, ...props }) => {
  return (
    <Input
      {...props}
      variant="line"
      className={twMerge(`${variantStyles.disabled} ${className} border-red-400`)}
    >
      {children}
    </Input>
  );
};

export const InputLineIconError: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="line"
      className={twMerge(`${variantStyles.default} ${className} border-red-400`)}
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputLineHoverIconError: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="line"
      className={twMerge(`${variantStyles.hover} ${className} border-red-400`)}
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputLineActiveIconError: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="line"
      className={twMerge(`${variantStyles.active} ${className} border-red-400`)}
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputLineDisabledIconError: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input
      {...props}
      variant="line"
      className={twMerge(`${variantStyles.disabled} ${className} border-red-400`)}
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color-disabled))]"
      error={true}
    >
      {children}
    </Input>
  );
};

export const LabeledInputLineHelperText: React.FC<
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
      variant="line"
      className={twMerge(`${variantStyles.default} ${className}`)}
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};
export const LabeledInputLineHelperTextHover: React.FC<
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
      variant="line"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};
export const LabeledInputLineHelperTextActive: React.FC<
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
      variant="line"
      className={twMerge(`${variantStyles.active} ${className}`)}
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};
export const LabeledInputLineHelperTextDisabled: React.FC<
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
      variant="line"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      label={label}
      helperText={helperText}
    >
      {children}
    </Input>
  );
};

export const LabeledInputLineHelperTextIcon: React.FC<
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
      variant="line"
      className={twMerge(`${variantStyles.default} ${className}`)}
      label={label}
      helperText={helperText}
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
    >
      {children}
    </Input>
  );
};

export const LabeledInputLineHelperTextHoverIcon: React.FC<
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
      variant="line"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      label={label}
      helperText={helperText}
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
    >
      {children}
    </Input>
  );
};

export const LabeledInputLineHelperTextActiveIcon: React.FC<
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
      variant="line"
      className={twMerge(`${variantStyles.active} ${className}`)}
      label={label}
      helperText={helperText}
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color))]"
    >
      {children}
    </Input>
  );
};

export const LabeledInputLineHelperTextDisabledIcon: React.FC<
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
      variant="line"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      label={label}
      helperText={helperText}
      showIcon={true}
      iconColor="text-[hsl(var(--icon-color-disabled))]"
    >
      {children}
    </Input>
  );
};