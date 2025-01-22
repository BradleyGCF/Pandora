import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { TextArea, TextAreaProps } from "./TextArea";

const variantStyles = {
  default:
    "bg-[hsl(var(--background-color))] border-1 outline-none ring-1 ring-[#e0e0e0] text-[hsl(var(--text-color-disabled))] p-[var(--input-padding)]",
  hover:
    "bg-[hsl(var(--background-color))] hover:ring-[hsl(var(--hover-border-default))] border-1 outline-none ring-1 ring-[#e0e0e0] text-black p-[var(--input-padding)]",
  active:
    "bg-[hsl(var(--background-color))] border-1 outline-none ring-1 ring-[#e0e0e0] text-black p-[var(--input-padding)]",
  disabled:
    "bg-[hsl(var(--background-color))] text-[hsl(var(--text-color-disabled))] p-[var(--input-padding)] border-1 outline-none ring-1 ring-[#e0e0e0]",
};

export const TextAreaRoundedSmDefault: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.default} ${className}`)}
      label={label}
      variant="rounded"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaRoundedSmHover: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      label={label}
      variant="rounded"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaRoundedSmActive: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.active} ${className}`)}
      label={label}
      variant="rounded"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaRoundedSmDisabled: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      label={label}
      variant="rounded"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaRoundedMdDefault: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.default} ${className}`)}
      label={label}
      variant="rounded"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaRoundedMdHover: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      label={label}
      variant="rounded"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaRoundedMdActive: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.active} ${className}`)}
      label={label}
      variant="rounded"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaRoundedMdDisabled: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      label={label}
      variant="rounded"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaRoundedLgDefault: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.default} ${className}`)}
      label={label}
      variant="rounded"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaRoundedLgHover: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      label={label}
      variant="rounded"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaRoundedLgActive: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.active} ${className}`)}
      label={label}
      variant="rounded"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaRoundedLgDisabled: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      label={label}
      variant="rounded"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaRoundedSmDefaultError: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.default} ${className}`)}
      error={true}
      errorText={errorText}
      label={label}
      variant="rounded"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaRoundedSmHoverError: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      errorText={errorText}
      error={true}
      label={label}
      variant="rounded"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaRoundedSmActiveError: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.active} ${className}`)}
      error={true}
      errorText={errorText}
      label={label}
      variant="rounded"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaRoundedSmDisabledError: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      error={true}
      errorText={errorText}
      label={label}
      variant="rounded"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaRoundedMdDefaultError: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.default} ${className}`)}
      error={true}
      errorText={errorText}
      label={label}
      variant="rounded"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaRoundedMdHoverError: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      error={true}
      errorText={errorText}
      label={label}
      variant="rounded"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaRoundedMdActiveError: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.active} ${className}`)}
      error={true}
      errorText={errorText}
      label={label}
      variant="rounded"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaRoundedMdDisabledError: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      error={true}
      errorText = "Input Helper Text"
      disabled
      label={label}
      variant="rounded"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaRoundedLgDefaultError: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.default} ${className}`)}
      error={true}
      errorText={errorText}
      label={label}
      variant="rounded"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaRoundedLgHoverError: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      error={true}
      errorText={errorText}
      label={label}
      variant="rounded"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaRoundedLgActiveError: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.active} ${className}`)}
      error={true}
      errorText={errorText}
      label={label}
      variant="rounded"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaRoundedLgDisabledError: React.FC<
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
      border="small"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      error={true}
      errorText = "Input Helper Text"
      disabled
      label={label}
      variant="rounded"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};