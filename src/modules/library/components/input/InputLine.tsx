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

export const InputLineSmall: React.FC<PropsWithChildren<InputProps>> = ({
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

export const InputLineHoverSmall: React.FC<
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

export const InputLineActiveSmall: React.FC<
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

export const InputLineDisabledSmall: React.FC<
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
