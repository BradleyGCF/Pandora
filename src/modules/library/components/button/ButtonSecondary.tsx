import React from "react";
import { Button, ButtonProps } from "./Button";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

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

export const ButtonSecondary: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={variantStyles.initial}
      border="large"
    />
  );
};

export const ButtonSecondaryHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={variantStyles.hover}
      border="large"
    />
  );
};

export const ButtonSecondaryActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={variantStyles.active}
      border="large"
    />
  );
};

export const ButtonSecondaryFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={variantStyles.focus}
      border="large"
    />
  );
};

export const ButtonSecondaryDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={variantStyles.disabled}
      border="large"
    />
  );
};

// RIGHT ICON

export const ButtonSecondaryArrowRight: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.initial}
      border="large"
    />
  );
};

export const ButtonSecondaryArrowHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.hover}
      border="large"
    />
  );
};

export const ButtonSecondaryArrowActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.active}
      border="large"
    />
  );
};

export const ButtonSecondaryArrowFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.focus}
      border="large"
    />
  );
};

export const ButtonSecondaryArrowDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.disabled}
      border="large"
    />
  );
};

// LEFT ICON

export const ButtonSecondaryArrowLeftInitial: React.FC<ButtonProps> = (
  props
) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.initial}
      border="large"
    />
  );
};

export const ButtonSecondaryArrowLeftHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.hover}
      border="large"
    />
  );
};

export const ButtonSecondaryArrowLeftActive: React.FC<ButtonProps> = (
  props
) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.active}
      border="large"
    />
  );
};

export const ButtonSecondaryArrowLeftFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.focus}
      border="large"
    />
  );
};

export const ButtonSecondaryArrowLeftDisabled: React.FC<ButtonProps> = (
  props
) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.disabled}
      border="large"
    />
  );
};

export const ButtonSecondaryMedium: React.FC<ButtonProps> = (
  props
) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={variantStyles.initial}
      border="medium"
    />
  );
};

export const ButtonSecondaryMediumHover: React.FC<ButtonProps> = (
  props
) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={variantStyles.hover}
      border="medium"
    />
  );
};

export const ButtonSecondaryMediumActive: React.FC<ButtonProps> = (
  props
) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={variantStyles.active}
      border="medium"
    />
  );
};

export const ButtonSecondaryMediumFocus: React.FC<ButtonProps> = (
  props
) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={variantStyles.focus}
      border="medium"
    />
  );
};

export const ButtonSecondaryMediumDisabled: React.FC<ButtonProps> = (
  props
) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={variantStyles.disabled}
      border="medium"
    />
  );
};

export const ButtonSecondaryMediumArrow: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.initial}
      border="medium"
    />
  );
};

export const ButtonSecondaryMediumArrowHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.hover}
      border="medium"
    />
  );
};

export const ButtonSecondaryMediumArrowActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.active}
      border="medium"
    />
  );
};

export const ButtonSecondaryMediumArrowFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.focus}
      border="medium"
    />
  );
};

export const ButtonSecondaryMediumArrowDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.disabled}
      border="medium"
    />
  );
};

export const ButtonSecondaryMediumLeft: React.FC<ButtonProps> = (
  props
) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.initial}
      border="medium"
    />
  );
};

export const ButtonSecondaryMediumLeftHover: React.FC<ButtonProps> = (
  props
) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.hover}
      border="medium"
    />
  );
};

export const ButtonSecondaryMediumLeftActive: React.FC<ButtonProps> = (
  props
) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.active}
      border="medium"
    />
  );
};

export const ButtonSecondaryMediumLeftFocus: React.FC<ButtonProps> = (
  props
) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.focus}
      border="medium"
    />
  );
};

export const ButtonSecondaryMediumLeftDisabled: React.FC<ButtonProps> = (
  props
) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.disabled}
      border="medium"
    />
  );
};

export const ButtonSecondarySmall: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={variantStyles.initial}
      border="small"
    />
  );
};

export const ButtonSecondarySmallHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={variantStyles.hover}
      border="small"
    />
  );
};

export const ButtonSecondarySmallActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={variantStyles.active}
      border="small"
    />
  );
};

export const ButtonSecondarySmallFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={variantStyles.focus}
      border="small"
    />
  );
};

export const ButtonSecondarySmallDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={variantStyles.disabled}
      border="small"
    />
  );
};

export const ButtonSecondarySmallRight: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.initial}
      border="small"
    />
  );
};

export const ButtonSecondarySmallRightHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.hover}
      border="small"
    />
  );
};

export const ButtonSecondarySmallRightActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.active}
      border="small"
    />
  );
};

export const ButtonSecondarySmallRightFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.focus}
      border="small"
    />
  );
};

export const ButtonSecondarySmallRightDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.disabled}
      border="small"
    />
  );
};

export const ButtonSecondarySmallLeft: React.FC<ButtonProps> = (
  props
) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.initial}
      border="small"
    />
  );
};

export const ButtonSecondarySmallLeftHover: React.FC<ButtonProps> = (
  props
) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.hover}
      border="small"
    />
  );
};

export const ButtonSecondarySmallLeftActive: React.FC<ButtonProps> = (
  props
) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.active}
      border="small"
    />
  );
};

export const ButtonSecondarySmallLeftFocus: React.FC<ButtonProps> = (
  props
) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.focus}
      border="small"
    />
  );
};

export const ButtonSecondarySmallLeftDisabled: React.FC<ButtonProps> = (
  props
) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.disabled}
      border="small"
    />
  );
};

export const ButtonSecondaryNormal: React.FC<ButtonProps> = (
  props
) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={variantStyles.initial}
      border="normal"
    />
  );
};
export const ButtonSecondaryNormalHover: React.FC<ButtonProps> = (
  props
) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={variantStyles.hover}
      border="normal"
    />
  );
};

export const ButtonSecondaryNormalActive: React.FC<ButtonProps> = (
  props
) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={variantStyles.active}
      border="normal"
    />
  );
};

export const ButtonSecondaryNormalFocus: React.FC<ButtonProps> = (
  props
) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={variantStyles.focus}
      border="normal"
    />
  );
};

export const ButtonSecondaryNormalDisabled: React.FC<ButtonProps> = (
  props
) => {
  return (
    <Button
      {...props}
      variant="secondary"
      className={variantStyles.disabled}
      border="normal"
    />
  );
};

export const ButtonSecondaryNormalLeft: React.FC<ButtonProps> = (
  props
) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.initial}
      border="normal"
    />
  );
};
export const ButtonSecondaryNormalLeftHover: React.FC<ButtonProps> = (
  props
) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.hover}
      border="normal"
    />
  );
};

export const ButtonSecondaryNormalLeftActive: React.FC<ButtonProps> = (
  props
) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.active}
      border="normal"
    />
  );
};

export const ButtonSecondaryNormalLeftFocus: React.FC<ButtonProps> = (
  props
) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.focus}
      border="normal"
    />
  );
};

export const ButtonSecondaryNormalLeftDisabled: React.FC<ButtonProps> = (
  props
) => {
  return (
    <Button
      leftIcon={<ArrowLeftIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.disabled}
      border="normal"
    />
  );
};

export const ButtonSecondaryNormalRight: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.initial}
      border="normal"
    />
  );
};
export const ButtonSecondaryNormalRightHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.hover}
      border="normal"
    />
  );
};
export const ButtonSecondaryNormalRightActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.active}
      border="normal"
    />
  );
};
export const ButtonSecondaryNormalRightFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.focus}
      border="normal"
    />
  );
};
export const ButtonSecondaryNormalRightDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      rightIcon={<ArrowRightIcon className="w-4 h-5" />}
      {...props}
      variant="secondary"
      className={variantStyles.disabled}
      border="normal"
    />
  );
};