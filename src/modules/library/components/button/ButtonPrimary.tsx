
import React from "react";
import { Button, ButtonProps } from "./Button";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const variantStyles = {
  initial:
    "bg-[hsl(var(--initial-primary))] text-white rounded-[var(--border-radius)] w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]] font-[var(--font-weight)]",
  hover:
    "bg-[hsl(var(--hover-primary))] hover:bg-[hsl(var(--hover-background-primary))] text-white rounded-[var(--border-radius)] w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]] font-[var(--font-weight)]",
  active:
    "bg-[hsl(var(--active-background-primary))] text-white shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] rounded-[var(--border-radius)] w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]] font-[var(--font-weight)]",
  focus:
    "bg-[hsl(var(--focus-background-primary))] text-white rounded-[var(--border-radius)] w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]] border-4 border-[#BFDBFE] outline-none ring-2 ring-[#BFDBFE] font-[var(--font-weight)]",
  disabled:
    "bg-[hsl(var(--disabled-background-primary))] text-white rounded-[var(--border-radius)] w-[var(--button-width)] h-[var(--button-height)] p-[var(--button-padding)]] border-4 border-[#BFDBFE] outline-none ring-2 ring-[#BFDBFE] font-[var(--font-weight)]",
};

export const ButtonPrimary: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} variant="primary" className={variantStyles.initial} />
  );
};

export const ButtonPrimaryHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} variant="primary" className={variantStyles.hover} />
  );
};

export const ButtonPrimaryActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} variant="primary" className={variantStyles.active} />
  );
};

export const ButtonPrimaryFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} variant="primary" className={variantStyles.focus} />
  );
};

export const ButtonPrimaryDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} variant="primary" className={variantStyles.disabled} />
  );
};

export const ButtonPrimaryArrowRight: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} rightIcon={<ArrowRightIcon className="w-4 h-5" />} variant="primary" className={variantStyles.initial} />
  );
};

export const ButtonPrimaryArrowHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} rightIcon={<ArrowRightIcon className="w-4 h-5" />} variant="primary" className={variantStyles.hover} />
  );
};

export const ButtonPrimaryArrowActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} rightIcon={<ArrowRightIcon className="w-4 h-5" />} variant="primary" className={variantStyles.active} />
  );
};

export const ButtonPrimaryArrowFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} rightIcon={<ArrowRightIcon className="w-4 h-5" />} variant="primary" className={variantStyles.focus} />
  );
};

export const ButtonPrimaryArrowDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} rightIcon={<ArrowRightIcon className="w-4 h-5" />} variant="primary" className={variantStyles.disabled} />
  );
};

export const ButtonPrimaryArrowLeft: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} rightIcon={<ArrowLeftIcon className="w-4 h-5" />} variant="primary" className={variantStyles.initial} />
  );
};

export const ButtonPrimaryArrowLeftHover: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} rightIcon={<ArrowLeftIcon className="w-4 h-5" />} variant="primary" className={variantStyles.hover} />
  );
};

export const ButtonPrimaryArrowLeftActive: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} rightIcon={<ArrowLeftIcon className="w-4 h-5" />} variant="primary" className={variantStyles.active} />
  );
};

export const ButtonPrimaryArrowLeftFocus: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} rightIcon={<ArrowLeftIcon className="w-4 h-5" />} variant="primary" className={variantStyles.focus} />
  );
};

export const ButtonPrimaryArrowLeftDisabled: React.FC<ButtonProps> = (props) => {
  return (
    <Button {...props} rightIcon={<ArrowLeftIcon className="w-4 h-5" />} variant="primary" className={variantStyles.disabled} />
  );
};

