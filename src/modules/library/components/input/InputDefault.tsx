import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { Input, InputProps } from "./Input";

const variantStyles = {
  default:
    "bg-[hsl(var(--background-input))] border-1 outline-none ring-1 ring-[#e0e0e0] text-[hsl(var(--text-color-disabled))] w-[var(--input-width)] h-[var(--input-height)] p-[var(--input-padding)]",
  hover:
    "bg-[hsl(var(--background-input))] hover:ring-[hsl(var(--hover-border-default))] border-1 outline-none ring-1 ring-[#e0e0e0] text-black w-[var(--input-width)] h-[var(--input-height)] p-[var(--input-padding)]",
  active:
    "bg-[hsl(var(--background-input))] border-1 outline-none ring-1 ring-[#e0e0e0] text-black w-[var(--input-width)] h-[var(--input-height)] p-[var(--input-padding)]",
  disabled:
    "bg-[hsl(var(--background-input))] text-[hsl(var(--text-color-disabled))] w-[var(--input-width)] h-[var(--input-height)] p-[var(--input-padding)]",
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
    >
      {children}
    </Input>
  );
};
