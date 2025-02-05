import React, { PropsWithChildren } from "react";
import { Button, ButtonProps } from "./Button";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { twMerge } from "tailwind-merge";

const variantStyles = {
  initial:
    "w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]] border-1 outline-none ring-1 ring-[#2196F3] font-[var(--font-weight)] text-sky-500",
  hover:
    "w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]] border-1 outline-none ring-1 ring-[#2196F3] hover:bg-[hsl(var(--hover-background-primary))] font-[var(--font-weight)] text-sky-500 hover:text-white",
  active:
    "w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]] border-1 outline-none ring-1 ring-[#1976D2] font-[var(--font-weight)] text-sky-600",
  focus:
    "w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]] border-1 outline-none ring-4 ring-[#90CAF9] font-[var(--font-weight)] text-sky-500",
  disabled:
    "w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]] border-1 outline-none ring-1 ring-[#90CAF9] font-[var(--font-weight)] text-sky-400",
};

export const ButtonSecondary: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.initial} ${className}`)}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryHover: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryFocus: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.focus} ${className}`)}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="large"
    >
      {children}
    </Button>
  );
};

// RIGHT ICON

export const ButtonSecondaryArrowRight: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.initial} ${className}`)}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryArrowHover: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryArrowActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryArrowFocus: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.focus} ${className}`)}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryArrowDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="large"
    >
      {children}
    </Button>
  );
};

// LEFT ICON

export const ButtonSecondaryArrowLeftInitial: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.initial} ${className}`)}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryArrowLeftHover: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryArrowLeftActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryArrowLeftFocus: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.focus} ${className}`)}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryArrowLeftDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryMedium: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.initial} ${className}`)}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryMediumHover: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryMediumActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryMediumFocus: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.focus} ${className}`)}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryMediumDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryMediumArrow: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.initial} ${className}`)}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryMediumArrowHover: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryMediumArrowActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryMediumArrowFocus: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.focus} ${className}`)}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryMediumArrowDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryMediumLeft: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.initial} ${className}`)}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryMediumLeftHover: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryMediumLeftActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryMediumLeftFocus: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.focus} ${className}`)}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryMediumLeftDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondarySmall: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.initial} ${className}`)}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondarySmallHover: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondarySmallActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondarySmallFocus: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.focus} ${className}`)}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondarySmallDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondarySmallRight: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.initial} ${className}`)}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondarySmallRightHover: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondarySmallRightActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondarySmallRightFocus: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.focus} ${className}`)}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondarySmallRightDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondarySmallLeft: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.initial} ${className}`)}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondarySmallLeftHover: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondarySmallLeftActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondarySmallLeftFocus: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.focus} ${className}`)}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondarySmallLeftDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryNormal: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.initial} ${className}`)}
      border="normal"
    >
      {children}
    </Button>
  );
};
export const ButtonSecondaryNormalHover: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="normal"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryNormalActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="normal"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryNormalFocus: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.focus} ${className}`)}
      border="normal"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryNormalDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="normal"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryNormalLeft: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.initial} ${className}`)}
      border="normal"
    >
      {children}
    </Button>
  );
};
export const ButtonSecondaryNormalLeftHover: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="normal"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryNormalLeftActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="normal"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryNormalLeftFocus: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.focus} ${className}`)}
      border="normal"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryNormalLeftDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="normal"
    >
      {children}
    </Button>
  );
};

export const ButtonSecondaryNormalRight: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.initial} ${className}`)}
      border="normal"
    >
      {children}
    </Button>
  );
};
export const ButtonSecondaryNormalRightHover: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="normal"
    >
      {children}
    </Button>
  );
};
export const ButtonSecondaryNormalRightActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="normal"
    >
      {children}
    </Button>
  );
};
export const ButtonSecondaryNormalRightFocus: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.focus} ${className}`)}
      border="normal"
    >
      {children}
    </Button>
  );
};
export const ButtonSecondaryNormalRightDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="normal"
    >
      {children}
    </Button>
  );
};
