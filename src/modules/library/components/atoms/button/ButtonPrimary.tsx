import React, { PropsWithChildren } from "react";
import { Button, ButtonProps } from "./Button";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { twMerge } from "tailwind-merge";

const variantStyles = {
  initial: `bg-[hsl(var(--initial-primary))] text-white w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)] font-[var(--font-weight)]`,
  hover:
    "bg-[hsl(var(--hover-primary))] hover:bg-[hsl(var(--hover-background-primary))] text-white w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]] font-[var(--font-weight)]",
  active:
    "bg-[hsl(var(--active-background-primary))] text-white shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]] font-[var(--font-weight)]",
  focus:
    "bg-[hsl(var(--focus-background-primary))] text-white w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]] border-4 border-[#BFDBFE] outline-none ring-2 ring-[#BFDBFE] font-[var(--font-weight)]",
  disabled:
    "bg-[hsl(var(--disabled-background-primary))] text-white w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]] border-4 border-[#BFDBFE] outline-none ring-2 ring-[#BFDBFE] font-[var(--font-weight)]",
};

export const ButtonPrimary: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Button
      {...props}
      variant="primary"
      className={twMerge(`${variantStyles.initial} ${className}`)}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryHover: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Button
      {...props}
      variant="primary"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryActive: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Button
      {...props}
      variant="primary"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryFocus: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Button
      {...props}
      variant="primary"
      className={twMerge(`${variantStyles.focus} ${className}`)}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      variant="primary"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryArrowRight: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.initial} ${className}`)}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryArrowHover: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryArrowActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryArrowFocus: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.focus} ${className}`)}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryArrowDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryArrowLeft: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.initial} ${className}`)}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryArrowLeftHover: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryArrowLeftActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryArrowLeftFocus: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.focus} ${className}`)}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryArrowLeftDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryMedium: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Button
      {...props}
      variant="primary"
      border="medium"
      className={twMerge(`${variantStyles.initial} ${className}`)}
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryMediumHover: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      variant="primary"
      border="medium"
      className={twMerge(`${variantStyles.hover} ${className}`)}
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryMediumActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      variant="primary"
      border="medium"
      className={twMerge(`${variantStyles.active} ${className}`)}
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryMediumFocus: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      variant="primary"
      border="medium"
      className={twMerge(`${variantStyles.focus} ${className}`)}
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryMediumDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      variant="primary"
      border="medium"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryMediumArrow: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.initial} ${className}`)}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryMediumArrowHover: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryMediumArrowActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryMediumArrowFocus: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.focus} ${className}`)}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryMediumArrowDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryMediumLeft: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.initial} ${className}`)}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryMediumLeftHover: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryMediumLeftActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryMediumLeftFocus: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.focus} ${className}`)}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryMediumLeftDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimarySmall: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Button
      {...props}
      variant="primary"
      className={twMerge(`${variantStyles.initial} ${className}`)}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimarySmallHover: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      variant="primary"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimarySmallActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      variant="primary"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimarySmallFocus: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      variant="primary"
      className={twMerge(`${variantStyles.focus} ${className}`)}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimarySmallDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      variant="primary"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryArrowSmall: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.initial} ${className}`)}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryArrowSmallHover: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryArrowSmallActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryArrowSmallFocus: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.focus} ${className}`)}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryArrowSmallDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimarySmallLeft: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.initial} ${className}`)}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimarySmallLeftHover: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimarySmallLeftActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimarySmallLeftFocus: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.focus} ${className}`)}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimarySmallLeftDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryNormal: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Button
      {...props}
      variant="primary"
      border="normal"
      className={twMerge(`${variantStyles.initial} ${className}`)}
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryNormalHover: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      variant="primary"
      border="normal"
      className={twMerge(`${variantStyles.hover} ${className}`)}
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryNormalActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      variant="primary"
      border="normal"
      className={twMerge(`${variantStyles.active} ${className}`)}
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryNormalFocus: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      variant="primary"
      border="normal"
      className={twMerge(`${variantStyles.focus} ${className}`)}
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryNormalDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      variant="primary"
      border="normal"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryNormalLeft: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.initial} ${className}`)}
      border="normal"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryNormalLeftHover: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="normal"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryNormalLeftActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="normal"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryNormalLeftFocus: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.focus} ${className}`)}
      border="normal"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryNormalLeftDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="normal"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryNormalRight: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.initial} ${className}`)}
      border="normal"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryNormalRightHover: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.hover} ${className}`)}
      border="normal"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryNormalRightActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.active} ${className}`)}
      border="normal"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryNormalRightFocus: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.focus} ${className}`)}
      border="normal"
    >
      {children}
    </Button>
  );
};

export const ButtonPrimaryNormalRightDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      border="normal"
    >
      {children}
    </Button>
  );
};
