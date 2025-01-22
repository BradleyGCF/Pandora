import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { TextArea, TextAreaProps } from "./TextArea";

const variantStyles = {
  default:
    "border-1 outline-none ring-1 ring-[#e0e0e0] text-[hsl(var(--text-color-disabled))] p-[var(--input-padding)]",
  hover:
    "hover:ring-[hsl(var(--hover-border-default))] border-1 outline-none ring-1 ring-[#e0e0e0] text-black p-[var(--input-padding)]",
  active:
    " order-1 outline-none ring-1 ring-[#e0e0e0] text-black p-[var(--input-padding)]",
  disabled:
    " ext-[hsl(var(--text-color-disabled))] p-[var(--input-padding)] border-1 outline-none ring-1 ring-[#e0e0e0]",
};

export const TextAreaBorderRoundedSmDefault: React.FC<PropsWithChildren<TextAreaProps>> = ({
  children,
  className,
  cols = 40,
  label = "Input Label",
  rows = 4,
  ...props
}) => {
  return (
    <TextArea
      border="small"
      className={twMerge(`${variantStyles.default} ${className}`)}
      label={label}
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderRoundedSmHover: React.FC<PropsWithChildren<TextAreaProps>> = ({
  children,
  className,
  cols = 40,
  label = "Input Label",
  rows = 4,
  ...props
}) => {
  return (
    <TextArea
      border="small"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      label={label}
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderRoundedSmActive: React.FC<PropsWithChildren<TextAreaProps>> = ({
  children,
  className,
  cols = 40,
  label = "Input Label",
  rows = 4,
  ...props
}) => {
  return (
    <TextArea
      border="small"
      className={twMerge(`${variantStyles.active} ${className}`)}
      label={label}
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderRoundedSmDisabled: React.FC<PropsWithChildren<TextAreaProps>> = ({
  children,
  className,
  cols = 40,
  label = "Input Label",
  rows = 4,
  ...props
}) => {
  return (
    <TextArea
      border="small"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      label={label}
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderNormalSmDefault: React.FC<PropsWithChildren<TextAreaProps>> = ({
  children,
  className,
  cols = 40,
  label = "Input Label",
  rows = 4,
  ...props
}) => {
  return (
    <TextArea
      border="normal"
      className={twMerge(`${variantStyles.default} ${className}`)}
      label={label}
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderNormalSmHover: React.FC<PropsWithChildren<TextAreaProps>> = ({
  children,
  className,
  cols = 40,
  label = "Input Label",
  rows = 4,
  ...props
}) => {
  return (
    <TextArea
      border="normal"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      label={label}
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderNormalSmActive: React.FC<PropsWithChildren<TextAreaProps>> = ({
  children,
  className,
  cols = 40,
  label = "Input Label",
  rows = 4,
  ...props
}) => {
  return (
    <TextArea
      border="normal"
      className={twMerge(`${variantStyles.active} ${className}`)}
      label={label}
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderNormalSmDisabled: React.FC<PropsWithChildren<TextAreaProps>> = ({
  children,
  className,
  cols = 40,
  label = "Input Label",
  rows = 4,
  ...props
}) => {
  return (
    <TextArea
      border="normal"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      label={label}
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderRoundedMdDefault: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderRoundedMdHover: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderRoundedMdActive: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderRoundedMdDisabled: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderNormalMdDefault: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderNormalMdHover: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderNormalMdActive: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderNormalMdDisabled: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderRoundedLgDefault: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderRoundedLgHover: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderRoundedLgActive: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderRoundedLgDisabled: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderNormalLgDefault: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderNormalLgHover: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderNormalLgActive: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderNormalLgDisabled: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderRoundedSmDefaultError: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderRoundedSmHoverError: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      error={true}
      errorText={errorText}
      label={label}
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderRoundedSmActiveError: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderRoundedSmDisabledError: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      error={true}
      errorText={errorText}
      disabled
      label={label}
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderNormalSmDefaultError: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderNormalSmHoverError: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderNormalSmActiveError: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderNormalSmDisabledError: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderRoundedMdDefaultError: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderRoundedMdHoverError: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderRoundedMdActiveError: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderRoundedMdDisabledError: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      errorText={errorText}
      disabled
      label={label}
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderNormalMdDefaultError: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderNormalMdHoverError: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderNormalMdActiveError: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderNormalMdDisabledError: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderRoundedLgDefaultError: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderRoundedLgHoverError: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderRoundedLgActiveError: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderRoundedLgDisabledError: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      errorText={errorText}
      disabled
      label={label}
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderNormalLgDefaultError: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderNormalLgHoverError: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderNormalLgActiveError: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaBorderNormalLgDisabledError: React.FC<PropsWithChildren<TextAreaProps>> = ({
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
      variant="border"
      rows={rows}
      cols={cols}
      {...props}
    >
      {children}
    </TextArea>
  );
};