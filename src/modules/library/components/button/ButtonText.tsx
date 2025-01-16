import React, { PropsWithChildren } from "react";
import { Button, ButtonProps } from "./Button";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const variantStyles = {
  initial:
    'border-transparent text-sky-500 font-[var(--font-weight)] "rounded-[var(--border-radius)] w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]]',
  hover:
    'text-sky-500 hover:text-white font-[var(--font-weight)] "rounded-[var(--border-radius)] w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]] hover:bg-[hsl(var(--hover-background-primary))]',
  active:
    'text-sky-600 font-[var(--font-weight)] "rounded-[var(--border-radius)] w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]]',
  focus:
    'text-sky-500 font-[var(--font-weight)] "rounded-[var(--border-radius)] w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]] ',
  disabled:
    'text-sky-400 font-[var(--font-weight)] "rounded-[var(--border-radius)] w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]]',
};

export const ButtonText: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <Button {...props} variant="text" border="large" className={variantStyles.initial}>
      {children}
    </Button>
  );
};

export const ButtonTextHover: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <Button
      {...props}
      variant="text"
      className={variantStyles.hover}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonTextActive: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <Button
      {...props}
      variant="text"
      className={variantStyles.active}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonTextFocus: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <Button
      {...props}
      variant="text"
      className={variantStyles.focus}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonTextDisabled: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <Button
      {...props}
      variant="text"
      className={variantStyles.disabled}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonTextArrowRight: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.initial}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonTextArrowHover: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.hover}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonTextArrowActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.active}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonTextArrowFocus: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.focus}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonTextArrowDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.disabled}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonTextArrowLeftInitial: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.initial}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonTextArrowLeftHover: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.hover}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonTextArrowLeftActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.active}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonTextArrowLeftFocus: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.focus}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonTextArrowLeftDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.disabled}
      border="large"
    >
      {children}
    </Button>
  );
};

export const ButtonTextMedium: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <Button
      {...props}
      variant="text"
      className={variantStyles.initial}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonTextMediumHover: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      variant="text"
      className={variantStyles.hover}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonTextMediumActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      variant="text"
      className={variantStyles.active}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonTextMediumFocus: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      variant="text"
      className={variantStyles.focus}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonTextMediumDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      variant="text"
      className={variantStyles.disabled}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonTextMediumArrow: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.initial}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonTextMediumArrowHover: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.hover}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonTextMediumArrowActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.active}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonTextMediumArrowFocus: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.focus}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonTextMediumArrowDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.disabled}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonTextMediumLeft: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.initial}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonTextMediumLeftHover: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.hover}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonTextMediumLeftActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.active}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonTextMediumLeftFocus: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.focus}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonTextMediumLeftDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.disabled}
      border="medium"
    >
      {children}
    </Button>
  );
};

export const ButtonTextSmall: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <Button
      {...props}
      variant="text"
      className={variantStyles.initial}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonTextSmallHover: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <Button
      {...props}
      variant="text"
      className={variantStyles.hover}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonTextSmallActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      variant="text"
      className={variantStyles.active}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonTextSmallFocus: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <Button
      {...props}
      variant="text"
      className={variantStyles.focus}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonTextSmallDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      variant="text"
      className={variantStyles.disabled}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonTextSmallRight: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.initial}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonTextSmallRightHover: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.hover}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonTextSmallRightActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.active}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonTextSmallRightFocus: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.focus}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonTextSmallRightDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.disabled}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonTextSmallLeft: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.initial}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonTextSmallLeftHover: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.hover}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonTextSmallLeftActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.active}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonTextSmallLeftFocus: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.focus}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonTextSmallLeftDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.disabled}
      border="small"
    >
      {children}
    </Button>
  );
};

export const ButtonTextNormalInitial: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      variant="text"
      className={variantStyles.initial}
      border="normal"
    >
      {children}
    </Button>
  );
};

export const ButtonTextNormalHover: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      variant="text"
      className={variantStyles.hover}
      border="normal"
    >
      {children}
    </Button>
  );
};

export const ButtonTextNormalActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      variant="text"
      className={variantStyles.active}
      border="normal"
    >
      {children}
    </Button>
  );
};

export const ButtonTextNormalFocus: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      variant="text"
      className={variantStyles.focus}
      border="normal"
    >
      {children}
    </Button>
  );
};

export const ButtonTextNormalDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      variant="text"
      className={variantStyles.disabled}
      border="normal"
    >
      {children}
    </Button>
  );
};

export const ButtonTextNormalLeft: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.initial}
      border="normal"
    >
      {children}
    </Button>
  );
};

export const ButtonTextNormalLeftHover: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.hover}
      border="normal"
    >
      {children}
    </Button>
  );
};

export const ButtonTextNormalLeftActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.active}
      border="normal"
    >
      {children}
    </Button>
  );
};

export const ButtonTextNormalLeftFocus: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.focus}
      border="normal"
    >
      {children}
    </Button>
  );
};

export const ButtonTextNormalLeftDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.disabled}
      border="normal"
    >
      {children}
    </Button>
  );
};

export const ButtonTextNormalRight: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.initial}
      border="normal"
    >
      {children}
    </Button>
  );
};

export const ButtonTextNormalRightHover: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.hover}
      border="normal"
    >
      {children}
    </Button>
  );
};

export const ButtonTextNormalRightActive: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.active}
      border="normal"
    >
      {children}
    </Button>
  );
};

export const ButtonTextNormalRightFocus: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.focus}
      border="normal"
    >
      {children}
    </Button>
  );
};

export const ButtonTextNormalRightDisabled: React.FC<
  PropsWithChildren<ButtonProps>
> = ({ children, ...props }) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.disabled}
      border="normal"
    >
      {children}
    </Button>
  );
};
