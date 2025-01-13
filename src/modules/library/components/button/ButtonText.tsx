import React from "react";
import { Button, ButtonProps } from "./Button";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const variantStyles = {
  initial:
    'border-transparent text-sky-500 font-[var(--font-weight)] "rounded-[var(--border-radius)] w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]]',
  hover:
    'text-sky-500 font-[var(--font-weight)] "rounded-[var(--border-radius)] w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]]',
  active:
    'text-sky-500 font-[var(--font-weight)] "rounded-[var(--border-radius)] w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]]',
  focus:
    'text-sky-500 font-[var(--font-weight)] "rounded-[var(--border-radius)] w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]] ',
  disabled:
    'text-sky-400 font-[var(--font-weight)] "rounded-[var(--border-radius)] w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]]',
};

export const ButtonText: React.FC<ButtonProps> = (props) => {
  return <Button {...props} variant="text" className={variantStyles.initial} />;
};

export const ButtonTextHover: React.FC<ButtonProps> = (props) => {
  return <Button {...props} variant="text" className={variantStyles.hover} />;
};

export const ButtonTextActive: React.FC<ButtonProps> = (props) => {
  return <Button {...props} variant="text" className={variantStyles.active} />;
};

export const ButtonTextFocus: React.FC<ButtonProps> = (props) => {
  return <Button {...props} variant="text" className={variantStyles.focus} />;
};

export const ButtonTextDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} variant="text" className={variantStyles.disabled} />
  );
};

export const ButtonTextArrowRight: React.FC<ButtonProps> = (props) => {
  return (
    <Button rightIcon={<ArrowRightIcon className="w-4 h-5" />} {...props} variant="text" className={variantStyles.initial} />
  );
};

export const ButtonTextArrowHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button rightIcon={<ArrowRightIcon className="w-4 h-5" />} {...props} variant="text" className={variantStyles.hover} />
  );
};

export const ButtonTextArrowActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button rightIcon={<ArrowRightIcon className="w-4 h-5" />} {...props} variant="text" className={variantStyles.active} />
  );
};

export const ButtonTextArrowFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button rightIcon={<ArrowRightIcon className="w-4 h-5" />} {...props} variant="text" className={variantStyles.focus} />
  );
};

export const ButtonTextArrowDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button rightIcon={<ArrowRightIcon className="w-4 h-5" />} {...props} variant="text" className={variantStyles.disabled} />
  );
};
