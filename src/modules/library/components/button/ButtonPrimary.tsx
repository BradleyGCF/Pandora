import React from "react";
import { Button, ButtonProps } from "./Button";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const variantStyles = {
  initial:
    "bg-[hsl(var(--initial-primary))] text-white w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]] font-[var(--font-weight)]",
  hover:
    "bg-[hsl(var(--hover-primary))] hover:bg-[hsl(var(--hover-background-primary))] text-white w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]] font-[var(--font-weight)]",
  active:
    "bg-[hsl(var(--active-background-primary))] text-white shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]] font-[var(--font-weight)]",
  focus:
    "bg-[hsl(var(--focus-background-primary))] text-white w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]] border-4 border-[#BFDBFE] outline-none ring-2 ring-[#BFDBFE] font-[var(--font-weight)]",
  disabled:
    "bg-[hsl(var(--disabled-background-primary))] text-white w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]] border-4 border-[#BFDBFE] outline-none ring-2 ring-[#BFDBFE] font-[var(--font-weight)]",
};

export const ButtonPrimary: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="primary"
      className={variantStyles.initial}
      border="large"
    />
  );
};

export const ButtonPrimaryHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="primary"
      className={variantStyles.hover}
      border="large"
    />
  );
};

export const ButtonPrimaryActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="primary"
      className={variantStyles.active}
      border="large"
    />
  );
};

export const ButtonPrimaryFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="primary"
      className={variantStyles.focus}
      border="large"
    />
  );
};

export const ButtonPrimaryDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="primary"
      className={variantStyles.disabled}
      border="large"
    />
  );
};

export const ButtonPrimaryArrowRight: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.initial}
      border="large"
    />
  );
};

export const ButtonPrimaryArrowHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.hover}
      border="large"
    />
  );
};

export const ButtonPrimaryArrowActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.active}
      border="large"
    />
  );
};

export const ButtonPrimaryArrowFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.focus}
      border="large"
    />
  );
};

export const ButtonPrimaryArrowDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.disabled}
      border="large"
    />
  );
};

export const ButtonPrimaryArrowLeft: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.initial}
      border="large"
    />
  );
};

export const ButtonPrimaryArrowLeftHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.hover}
      border="large"
    />
  );
};

export const ButtonPrimaryArrowLeftActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.active}
      border="large"
    />
  );
};

export const ButtonPrimaryArrowLeftFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.focus}
      border="large"
    />
  );
};

export const ButtonPrimaryArrowLeftDisabled: React.FC<ButtonProps> = (
  props
) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.disabled}
      border="large"
    />
  );
};

export const ButtonPrimaryMedium: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="primary"
      border="medium"
      className={variantStyles.initial}
    />
  );
};

export const ButtonPrimaryMediumHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="primary"
      border="medium"
      className={variantStyles.hover}
    />
  );
};

export const ButtonPrimaryMediumActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="primary"
      border="medium"
      className={variantStyles.active}
    />
  );
};

export const ButtonPrimaryMediumFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="primary"
      border="medium"
      className={variantStyles.focus}
    />
  );
};

export const ButtonPrimaryMediumDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="primary"
      border="medium"
      className={variantStyles.disabled}
    />
  );
};

export const ButtonPrimaryMediumArrow: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.initial}
      border="medium"
    />
  );
};

export const ButtonPrimaryMediumArrowHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.hover}
      border="medium"
    />
  );
};

export const ButtonPrimaryMediumArrowActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.active}
      border="medium"
    />
  );
};

export const ButtonPrimaryMediumArrowFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.focus}
      border="medium"
    />
  );
};

export const ButtonPrimaryMediumArrowDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.disabled}
      border="medium"
    />
  );
};

export const ButtonPrimaryMediumLeft: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.initial}
      border="medium"
    />
  );
};

export const ButtonPrimaryMediumLeftHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.hover}
      border="medium"
    />
  );
};

export const ButtonPrimaryMediumLeftActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.active}
      border="medium"
    />
  );
};

export const ButtonPrimaryMediumLeftFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.focus}
      border="medium"
    />
  );
};

export const ButtonPrimaryMediumLeftDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.disabled}
      border="medium"
    />
  );
};

export const ButtonPrimarySmall: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="primary"
      className={variantStyles.initial}
      border="small"
    />
  );
};

export const ButtonPrimarySmallHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="primary"
      className={variantStyles.hover}
      border="small"
    />
  );
};

export const ButtonPrimarySmallActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="primary"
      className={variantStyles.active}
      border="small"
    />
  );
};

export const ButtonPrimarySmallFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="primary"
      className={variantStyles.focus}
      border="small"
    />
  );
};

export const ButtonPrimarySmallDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="primary"
      className={variantStyles.disabled}
      border="small"
    />
  );
};


export const ButtonPrimaryArrowSmall: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.initial}
      border="small"
    />
  );
};

export const ButtonPrimaryArrowSmallHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.hover}
      border="small"
    />
  );
};

export const ButtonPrimaryArrowSmallActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.active}
      border="small"
    />
  );
};

export const ButtonPrimaryArrowSmallFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.focus}
      border="small"
    />
  );
};

export const ButtonPrimaryArrowSmallDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.disabled}
      border="small"
    />
  );
};

export const ButtonPrimarySmallLeft: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.initial}
      border="small"
    />
  );
};

export const ButtonPrimarySmallLeftHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.hover}
      border="small"
    />
  );
};

export const ButtonPrimarySmallLeftActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.active}
      border="small"
    />
  );
};

export const ButtonPrimarySmallLeftFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.focus}
      border="small"
    />
  );
};

export const ButtonPrimarySmallLeftDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.disabled}
      border="small"
    />
  );
};

export const ButtonPrimaryNormal: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="primary"
      border="normal"
      className={variantStyles.initial}
    />
  );
};

export const ButtonPrimaryNormalHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="primary"
      border="normal"
      className={variantStyles.hover}
    />
  );
};

export const ButtonPrimaryNormalActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="primary"
      border="normal"
      className={variantStyles.active}
    />
  );
};

export const ButtonPrimaryNormalFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="primary"
      border="normal"
      className={variantStyles.focus}
    />
  );
};

export const ButtonPrimaryNormalDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="primary"
      border="normal"
      className={variantStyles.disabled}
    />
  );
};

export const ButtonPrimaryNormalLeft: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.initial}
      border="normal"
    />
  );
};

export const ButtonPrimaryNormalLeftHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.hover}
      border="normal"
    />
  );
};

export const ButtonPrimaryNormalLeftActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.initial}
      border="normal"
    />
  );
};

export const ButtonPrimaryNormalLeftFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.focus}
      border="normal"
    />
  );
};

export const ButtonPrimaryNormalLeftDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.disabled}
      border="normal"
    />
  );
};

export const ButtonPrimaryNormalRight: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.initial}
      border="normal"
    />
  );
};

export const ButtonPrimaryNormalRightHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.hover}
      border="normal"
    />
  );
};

export const ButtonPrimaryNormalRightActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.active}
      border="normal"
    />
  );
};

export const ButtonPrimaryNormalRightFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.focus}
      border="normal"
    />
  );
};

export const ButtonPrimaryNormalRightDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      variant="primary"
      className={variantStyles.disabled}
      border="normal"
    />
  );
};