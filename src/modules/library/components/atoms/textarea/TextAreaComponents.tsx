import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { TextArea, TextAreaProps } from "./TextArea";

const variantStyles = {
  default: "border-1 outline-none ring-1 ring-[#e0e0e0]",
  focus: "border-2 border-[#84CAFF] outline-none ring-4 ring-[#BFDBFE]",
  disabled: "text-[hsl(var(--text-color-disabled))] border-1 outline-none ring-1 ring-[#e0e0e0]",
  error: "border-1 outline-none ring-1 ring-[#e0e0e0]",
  errorFocused: "border-1 outline-none ring-1 ring-[#e0e0e0]",
};

export const TextAreaDefault: React.FC<PropsWithChildren<TextAreaProps>> = ({
  children,
  className,
  helperText = "User Help Text",
  label = "Description",
  ...props
}) => {
  return (
    <TextArea
      className={twMerge(`${variantStyles.default} ${className}`)}
      helperText={helperText}
      label={label}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaFocus: React.FC<PropsWithChildren<TextAreaProps>> = ({
  children,
  className,
  helperText = "User Help Text",
  label = "Description",
  ...props
}) => {
  return (
    <TextArea
      className={twMerge(`${variantStyles.focus} ${className}`)}
      helperText={helperText}
      label={label}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaDisabled: React.FC<PropsWithChildren<TextAreaProps>> = ({
  children,
  className,
  helperText = "User Help Text",
  label = "Description",
  ...props
}) => {
  return (
    <TextArea
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      helperText={helperText}
      label={label}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaError: React.FC<PropsWithChildren<TextAreaProps>> = ({
  children,
  className,
  helperText = "User Help Text",
  label = "Description",
  ...props
}) => {
  return (
    <TextArea
      className={twMerge(`${variantStyles.error} ${className}`)}
      error={true}
      helperText={helperText}
      label={label}
      {...props}
    >
      {children}
    </TextArea>
  );
};

export const TextAreaErrorFocused: React.FC<
  PropsWithChildren<TextAreaProps>
> = ({
  children,
  className,
  helperText = "User Help Text",
  label = "Description",
  ...props
}) => {
  return (
    <TextArea
      className={twMerge(`${variantStyles.errorFocused} ${className}`)}
      errorFocus={true}
      error={true}
      helperText={helperText}
      label={label}
      {...props}
    >
      {children}
    </TextArea>
  );
};
