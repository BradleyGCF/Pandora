import React from "react";
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

export const ButtonText: React.FC<ButtonProps> = (props) => {
  return <Button {...props} variant="text" className={variantStyles.initial} />;
};

export const ButtonTextHover: React.FC<ButtonProps> = (props) => {
  return <Button {...props} variant="text" className={variantStyles.hover} border="large" />;
};

export const ButtonTextActive: React.FC<ButtonProps> = (props) => {
  return <Button {...props} variant="text" className={variantStyles.active} border="large" />;
};

export const ButtonTextFocus: React.FC<ButtonProps> = (props) => {
  return <Button {...props} variant="text" className={variantStyles.focus} border="large" />;
};

export const ButtonTextDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} variant="text" className={variantStyles.disabled} border="large" />
  );
};

export const ButtonTextArrowRight: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.initial}
      border="large"
    />
  );
};

export const ButtonTextArrowHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.hover}
      border="large"
    />
  );
};

export const ButtonTextArrowActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.active}
      border="large"
    />
  );
};

export const ButtonTextArrowFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.focus}
      border="large"
    />
  );
};

export const ButtonTextArrowDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.disabled}
      border="large"
    />
  );
};

export const ButtonTextArrowLeftInitial: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.initial}
      border="large"
    />
  );
};

export const ButtonTextArrowLeftHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.hover}
      border="large"
    />
  );
};

export const ButtonTextArrowLeftActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.active}
      border="large"
    />
  );
};

export const ButtonTextArrowLeftFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.focus}
      border="large"
    />
  );
};

export const ButtonTextArrowLeftDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.disabled}
      border="large"
    />
  );
};

export const ButtonTextMedium: React.FC<ButtonProps> = (props) => {
  return <Button {...props} variant="text" className={variantStyles.initial} border="medium" />;
};

export const ButtonTextMediumHover: React.FC<ButtonProps> = (props) => {
  return <Button {...props} variant="text" className={variantStyles.hover} border="medium" />;
};

export const ButtonTextMediumActive: React.FC<ButtonProps> = (props) => {
  return <Button {...props} variant="text" className={variantStyles.active} border="medium" />;
};

export const ButtonTextMediumFocus: React.FC<ButtonProps> = (props) => {
  return <Button {...props} variant="text" className={variantStyles.focus} border="medium" />;
};

export const ButtonTextMediumDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} variant="text" className={variantStyles.disabled} border="medium" />
  );
};

export const ButtonTextMediumArrow: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.initial}
      border="medium"
    />
  );
};

export const ButtonTextMediumArrowHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.hover}
      border="medium"
    />
  );
};

export const ButtonTextMediumArrowActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.active}
      border="medium"
    />
  );
};

export const ButtonTextMediumArrowFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.focus}
      border="medium"
    />
  );
};

export const ButtonTextMediumArrowDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.disabled}
      border="medium"
    />
  );
};

export const ButtonTextMediumLeft: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.initial}
      border="medium"
    />
  );
};

export const ButtonTextMediumLeftHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.hover}
      border="medium"
    />
  );
};

export const ButtonTextMediumLeftActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.active}
      border="medium"
    />
  );
};

export const ButtonTextMediumLeftFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.focus}
      border="medium"
    />
  );
};

export const ButtonTextMediumLeftDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.disabled}
      border="medium"
    />
  );
};

export const ButtonTextSmall: React.FC<ButtonProps> = (props) => {
  return <Button {...props} variant="text" className={variantStyles.initial} border="small" />;
};

export const ButtonTextSmallHover: React.FC<ButtonProps> = (props) => {
  return <Button {...props} variant="text" className={variantStyles.hover} border="small" />;
};

export const ButtonTextSmallActive: React.FC<ButtonProps> = (props) => {
  return <Button {...props} variant="text" className={variantStyles.active} border="small" />;
};

export const ButtonTextSmallFocus: React.FC<ButtonProps> = (props) => {
  return <Button {...props} variant="text" className={variantStyles.focus} border="small" />;
};

export const ButtonTextSmallDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} variant="text" className={variantStyles.disabled} border="small" />
  );
};

export const ButtonTextSmallRight: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.initial}
      border="small"
    />
  );
};

export const ButtonTextSmallRightHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.hover}
      border="small"
    />
  );
};

export const ButtonTextSmallRightActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.active}
      border="small"
    />
  );
};

export const ButtonTextSmallRightFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.focus}
      border="small"
    />
  );
};

export const ButtonTextSmallRightDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.disabled}
      border="small"
    />
  );
};

export const ButtonTextSmallLeft: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.initial}
      border="small"
    />
  );
};

export const ButtonTextSmallLeftHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.hover}
      border="small"
    />
  );
};

export const ButtonTextSmallLeftActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.active}
      border="small"
    />
  );
};

export const ButtonTextSmallLeftFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.focus}
      border="small"
    />
  );
};

export const ButtonTextSmallLeftDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.disabled}
      border="small"
    />
  );
};

export const ButtonTextNormalInitial: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="text"
      className={variantStyles.initial}
      border="normal"
    />
  );
};

export const ButtonTextNormalHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="text"
      className={variantStyles.hover}
      border="normal"
    />
  );
};

export const ButtonTextNormalActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="text"
      className={variantStyles.active}
      border="normal"
    />
  );
};

export const ButtonTextNormalFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="text"
      className={variantStyles.focus}
      border="normal"
    />
  );
};

export const ButtonTextNormalDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="text"
      className={variantStyles.disabled}
      border="normal"
    />
  );
};

export const ButtonTextNormalLeft: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.initial}
      border="normal"
    />
  );
};

export const ButtonTextNormalLeftHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.hover}
      border="normal"
    />
  );
};

export const ButtonTextNormalLeftActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.active}
      border="normal"
    />
  );
};

export const ButtonTextNormalLeftFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.focus}
      border="normal"
    />
  );
};

export const ButtonTextNormalLeftDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.disabled}
      border="normal"
    />
  );
};

export const ButtonTextNormalRight: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.initial}
      border="normal"
    />
  );
};

export const ButtonTextNormalRightHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.hover}
      border="normal"
    />
  );
};

export const ButtonTextNormalRightActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.active}
      border="normal"
    />
  );
};

export const ButtonTextNormalRightFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.focus}
      border="normal"
    />
  );
};

export const ButtonTextNormalRightDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="text"
      className={variantStyles.disabled}
      border="normal"
    />
  );
};
