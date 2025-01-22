import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { TextArea, TextAreaProps } from "./TextArea";

const variantStyles = {
  default:
    "bg-[hsl(var(--background-color))] border-1 outline-none ring-1 ring-[#e0e0e0] text-[hsl(var(--text-color-disabled))] p-[var(--input-padding)]",
  hover:
    "bg-[hsl(var(--background-color))] hover:ring-[hsl(var(--hover-border-default))] border-1 outline-none ring-1 ring-[#e0e0e0] text-black p-[var(--input-padding)]",
  active:
    " bg-[hsl(var(--background-color))] border-1 outline-none ring-1 ring-[#e0e0e0] text-black p-[var(--input-padding)]",
  disabled:
    " bg-[hsl(var(--background-color))] text-[hsl(var(--text-color-disabled))] p-[var(--input-padding)] border-1 outline-none ring-1 ring-[#e0e0e0]",
};

export const TextAreaNormalSmDefault: React.FC<
  PropsWithChildren<TextAreaProps>
> = ({
  children,
  className,
  label = "Input Label",
  rows = 4,
  cols = 40,
  ...props
}) => {
  return (
    <TextArea
      border="normal"
      className={twMerge(`${variantStyles.default} ${className}`)}
      label={label}
      variant="normal"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaNormalSmHover: React.FC<
  PropsWithChildren<TextAreaProps>
> = ({
  children,
  className,
  label = "Input Label",
  rows = 4,
  cols = 40,
  ...props
}) => {
  return (
    <TextArea
      border="normal"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      label={label}
      variant="normal"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaNormalSmActive: React.FC<
  PropsWithChildren<TextAreaProps>
> = ({
  children,
  className,
  label = "Input Label",
  rows = 4,
  cols = 40,
  ...props
}) => {
  return (
    <TextArea
      border="normal"
      className={twMerge(`${variantStyles.active} ${className}`)}
      label={label}
      variant="normal"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaNormalSmDisabled: React.FC<
  PropsWithChildren<TextAreaProps>
> = ({
  children,
  className,
  label = "Input Label",
  rows = 4,
  cols = 40,
  ...props
}) => {
  return (
    <TextArea
      border="normal"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      label={label}
      variant="normal"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaNormalMdDefault: React.FC<
  PropsWithChildren<TextAreaProps>
> = ({
  children,
  className,
  label = "Input Label",
  rows = 8,
  cols = 40,
  ...props
}) => {
  return (
    <TextArea
      border="normal"
      className={twMerge(`${variantStyles.default} ${className}`)}
      label={label}
      variant="normal"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaNormalMdHover: React.FC<
  PropsWithChildren<TextAreaProps>
> = ({
  children,
  className,
  label = "Input Label",
  rows = 8,
  cols = 40,
  ...props
}) => {
  return (
    <TextArea
      border="normal"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      label={label}
      variant="normal"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaNormalMdActive: React.FC<
  PropsWithChildren<TextAreaProps>
> = ({
  children,
  className,
  label = "Input Label",
  rows = 8,
  cols = 40,
  ...props
}) => {
  return (
    <TextArea
      border="normal"
      className={twMerge(`${variantStyles.active} ${className}`)}
      label={label}
      variant="normal"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaNormalMdDisabled: React.FC<
  PropsWithChildren<TextAreaProps>
> = ({
  children,
  className,
  label = "Input Label",
  rows = 8,
  cols = 40,
  ...props
}) => {
  return (
    <TextArea
      border="normal"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      label={label}
      variant="normal"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaNormalLgDefault: React.FC<
  PropsWithChildren<TextAreaProps>
> = ({
  children,
  className,
  label = "Input Label",
  rows = 12,
  cols = 40,
  ...props
}) => {
  return (
    <TextArea
      border="normal"
      className={twMerge(`${variantStyles.default} ${className}`)}
      label={label}
      variant="normal"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaNormalLgHover: React.FC<
  PropsWithChildren<TextAreaProps>
> = ({
  children,
  className,
  label = "Input Label",
  rows = 12,
  cols = 40,
  ...props
}) => {
  return (
    <TextArea
      border="normal"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      label={label}
      variant="normal"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaNormalLgActive: React.FC<
  PropsWithChildren<TextAreaProps>
> = ({
  children,
  className,
  label = "Input Label",
  rows = 12,
  cols = 40,
  ...props
}) => {
  return (
    <TextArea
      border="normal"
      className={twMerge(`${variantStyles.active} ${className}`)}
      label={label}
      variant="normal"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaNormalLgDisabled: React.FC<
  PropsWithChildren<TextAreaProps>
> = ({
  children,
  className,
  label = "Input Label",
  rows = 12,
  cols = 40,
  ...props
}) => {
  return (
    <TextArea
      border="normal"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      label={label}
      variant="normal"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaNormalSmDefaultError: React.FC<
  PropsWithChildren<TextAreaProps>
> = ({
  children,
  className,
  errorText = "Error Message",
  label = "Input Label",
  rows = 4,
  cols = 40,
  ...props
}) => {
  return (
    <TextArea
      border="normal"
      className={twMerge(`${variantStyles.default} ${className}`)}
      error={true}
      errorText={errorText}
      label={label}
      variant="normal"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaNormalSmHoverError: React.FC<
  PropsWithChildren<TextAreaProps>
> = ({
  children,
  className,
  errorText = "Error Message",
  label = "Input Label",
  rows = 4,
  cols = 40,
  ...props
}) => {
  return (
    <TextArea
      border="normal"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      error={true}
      errorText={errorText}
      label={label}
      variant="normal"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaNormalSmActiveError: React.FC<
  PropsWithChildren<TextAreaProps>
> = ({
  children,
  className,
  errorText = "Error Message",
  label = "Input Label",
  rows = 4,
  cols = 40,
  ...props
}) => {
  return (
    <TextArea
      border="normal"
      className={twMerge(`${variantStyles.active} ${className}`)}
      error={true}
      errorText={errorText}
      label={label}
      variant="normal"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaNormalSmDisabledError: React.FC<
  PropsWithChildren<TextAreaProps>
> = ({
  children,
  className,
  errorText = "Error Message",
  label = "Input Label",
  rows = 4,
  cols = 40,
  ...props
}) => {
  return (
    <TextArea
      border="normal"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      error={true}
      errorText={errorText}
      disabled
      label={label}
      variant="normal"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaNormalMdDefaultError: React.FC<
  PropsWithChildren<TextAreaProps>
> = ({
  children,
  className,
  errorText = "Error Message",
  label = "Input Label",
  rows = 8,
  cols = 40,
  ...props
}) => {
  return (
    <TextArea
      border="normal"
      className={twMerge(`${variantStyles.default} ${className}`)}
      error={true}
      errorText={errorText}
      label={label}
      variant="normal"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaNormalMdHoverError: React.FC<
  PropsWithChildren<TextAreaProps>
> = ({
  children,
  className,
  errorText = "Error Message",
  label = "Input Label",
  rows = 8,
  cols = 40,
  ...props
}) => {
  return (
    <TextArea
      border="normal"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      error={true}
      errorText={errorText}
      label={label}
      variant="normal"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaNormalMdActiveError: React.FC<
  PropsWithChildren<TextAreaProps>
> = ({
  children,
  className,
  errorText = "Error Message",
  label = "Input Label",
  rows = 8,
  cols = 40,
  ...props
}) => {
  return (
    <TextArea
      border="normal"
      className={twMerge(`${variantStyles.active} ${className}`)}
      error={true}
      errorText={errorText}
      label={label}
      variant="normal"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaNormalMdDisabledError: React.FC<
  PropsWithChildren<TextAreaProps>
> = ({
  children,
  className,
  errorText = "Error Message",
  label = "Input Label",
  rows = 8,
  cols = 40,
  ...props
}) => {
  return (
    <TextArea
      border="normal"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      error={true}
      errorText={errorText}
      disabled
      label={label}
      variant="normal"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaNormalLgDefaultError: React.FC<
  PropsWithChildren<TextAreaProps>
> = ({
  children,
  className,
  errorText = "Error Message",
  label = "Input Label",
  rows = 12,
  cols = 40,
  ...props
}) => {
  return (
    <TextArea
      border="normal"
      className={twMerge(`${variantStyles.default} ${className}`)}
      error={true}
      errorText={errorText}
      label={label}
      variant="normal"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaNormalLgHoverError: React.FC<
  PropsWithChildren<TextAreaProps>
> = ({
  children,
  className,
  errorText = "Error Message",
  label = "Input Label",
  rows = 12,
  cols = 40,
  ...props
}) => {
  return (
    <TextArea
      border="normal"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      error={true}
      errorText={errorText}
      label={label}
      variant="normal"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaNormalLgActiveError: React.FC<
  PropsWithChildren<TextAreaProps>
> = ({
  children,
  className,
  errorText = "Error Message",
  label = "Input Label",
  rows = 12,
  cols = 40,
  ...props
}) => {
  return (
    <TextArea
      border="normal"
      className={twMerge(`${variantStyles.active} ${className}`)}
      error={true}
      errorText={errorText}
      label={label}
      variant="normal"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaNormalLgDisabledError: React.FC<
  PropsWithChildren<TextAreaProps>
> = ({
  children,
  className,
  errorText = "Error Message",
  label = "Input Label",
  rows = 12,
  cols = 40,
  ...props
}) => {
  return (
    <TextArea
      border="normal"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      error={true}
      errorText={errorText}
      disabled
      label={label}
      variant="normal"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};
