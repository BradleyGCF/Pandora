import React from "react";
import { Button, ButtonProps } from "./Button";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const variantStyles = {
  initial:
    "rounded-[var(--border-radius)] w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]] border-1 outline-none ring-1 ring-[#2196F3] font-[var(--font-weight)] text-sky-500",
  hover:
    "rounded-[var(--border-radius)] w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]] border-1 outline-none ring-1 ring-[#2196F3] hover:bg-[hsl(var(--hover-background-primary))] font-[var(--font-weight)] text-sky-500",
  active:
    "rounded-[var(--border-radius)] w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]] border-1 outline-none ring-1 ring-[#1976D2] font-[var(--font-weight)] text-sky-600",
  focus:
    "rounded-[var(--border-radius)] w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]] border-1 outline-none ring-4 ring-[#90CAF9] font-[var(--font-weight)] text-sky-500",
  disabled:
    "rounded-[var(--border-radius)] w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]] border-1 outline-none ring-1 ring-[#90CAF9] font-[var(--font-weight)] text-sky-400",
};

export const ButtonSecondary: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} variant="secondary" className={variantStyles.initial} />
  );
};

export const ButtonSecondaryHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} variant="secondary" className={variantStyles.hover} />
  );
};

export const ButtonSecondaryActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} variant="secondary" className={variantStyles.active} />
  );
};

export const ButtonSecondaryFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} variant="secondary" className={variantStyles.focus} />
  );
};

export const ButtonSecondaryDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} variant="secondary" className={variantStyles.disabled} />
  );
};

// RIGHT ICON

export const ButtonSecondaryArrowRight: React.FC<ButtonProps> = (props) => {
  return (
    <Button rightIcon={<ArrowRightIcon className="w-4 h-5" />} {...props} variant="secondary" className={variantStyles.initial} />
  );
};
export const ButtonSecondaryArrowHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button rightIcon={<ArrowRightIcon className="w-4 h-5" />} {...props} variant="secondary" className={variantStyles.hover} />
  );
};
export const ButtonSecondaryArrowActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button rightIcon={<ArrowRightIcon className="w-4 h-5" />} {...props} variant="secondary" className={variantStyles.active} />
  );
};
export const ButtonSecondaryArrowFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button rightIcon={<ArrowRightIcon className="w-4 h-5" />} {...props} variant="secondary" className={variantStyles.focus} />
  );
};
export const ButtonSecondaryArrowDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button rightIcon={<ArrowRightIcon className="w-4 h-5" />} {...props} variant="secondary" className={variantStyles.disabled} />
  );
};
