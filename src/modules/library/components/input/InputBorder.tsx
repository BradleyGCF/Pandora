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
      variant="default"
      className={twMerge(`${variantStyles.default} ${className}`)}
    >
      {children}
    </Input>
  );
};

export const InputBorderHoverSmall: React.FC<
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

export const InputBorderActiveSmall: React.FC<
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

export const InputBorderDisabledSmall: React.FC<
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
