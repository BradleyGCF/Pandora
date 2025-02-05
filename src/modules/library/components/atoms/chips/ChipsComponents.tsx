import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { Chips, ChipsProps } from "./Chips";

const variantStyles = {
  neutral: "bg-[hsla(var(--bg-chips-neutral))] ring-1 ring-gray-400",
  primary: "bg-[hsla(var(--bg-chips-primary))] ring-1 ring-blue-500 text-blue-700",
  secondary: "bg-[hsla(var(--bg-chips-secondary))] ring-1 ring-purple-500 text-purple-600",
  danger: "bg-[hsla(var(--bg-chips-danger))] ring-1 ring-red-700 text-red-700 text-red-600",
  warning: "bg-[hsla(var(--bg-chips-warning))] ring-1 ring-orange-800 text-orange-600",
  info: "bg-[hsla(var(--bg-chips-info))] ring-1 ring-lightBlue-700 text-sky-700",
  success: "bg-[hsla(var(--bg-chips-success))] ring-1 ring-green-800 text-green-800",
};

export const ChipsNeutral: React.FC<PropsWithChildren<ChipsProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Chips
      className={twMerge(`${variantStyles.neutral} ${className}`)}
      {...props}
    >
      {children}
    </Chips>
  );
};

export const ChipsPrimary: React.FC<PropsWithChildren<ChipsProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Chips
      className={twMerge(`${variantStyles.primary} ${className}`)}
      {...props}
    >
      {children}
    </Chips>
  );
};

export const ChipsSecondary: React.FC<PropsWithChildren<ChipsProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Chips
      className={twMerge(`${variantStyles.secondary} ${className}`)}
      {...props}
    >
      {children}
    </Chips>
  );
};

export const ChipsDanger: React.FC<PropsWithChildren<ChipsProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Chips
      className={twMerge(`${variantStyles.danger} ${className}`)}
      {...props}
    >
      {children}
    </Chips>
  );
};

export const ChipsWarning: React.FC<PropsWithChildren<ChipsProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Chips
      className={twMerge(`${variantStyles.warning} ${className}`)}
      {...props}
    >
      {children}
    </Chips>
  );
};

export const ChipsInfo: React.FC<PropsWithChildren<ChipsProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Chips
      className={twMerge(`${variantStyles.info} ${className}`)}
      {...props}
    >
      {children}
    </Chips>
  );
};

export const ChipsSuccess: React.FC<PropsWithChildren<ChipsProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Chips
      className={twMerge(`${variantStyles.success} ${className}`)}
      {...props}
    >
      {children}
    </Chips>
  );
};

export const ChipsNeutralIcon: React.FC<PropsWithChildren<ChipsProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Chips
      className={twMerge(`${variantStyles.neutral} ${className}`)}
      showIcon={true}
      {...props}
    >
      {children}
    </Chips>
  );
};

export const ChipsPrimaryIcon: React.FC<PropsWithChildren<ChipsProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Chips
      className={twMerge(`${variantStyles.primary} ${className}`)}
      showIcon={true}
      {...props}
    >
      {children}
    </Chips>
  );
};

export const ChipsSecondaryIcon: React.FC<PropsWithChildren<ChipsProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Chips
      className={twMerge(`${variantStyles.secondary} ${className}`)}
      showIcon={true}
      {...props}
    >
      {children}
    </Chips>
  );
};

export const ChipsDangerIcon: React.FC<PropsWithChildren<ChipsProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Chips
      className={twMerge(`${variantStyles.danger} ${className}`)}
      showIcon={true}
      {...props}
    >
      {children}
    </Chips>
  );
};

export const ChipsWarningIcon: React.FC<PropsWithChildren<ChipsProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Chips
      className={twMerge(`${variantStyles.warning} ${className}`)}
      showIcon={true}
      {...props}
    >
      {children}
    </Chips>
  );
};

export const ChipsInfoIcon: React.FC<PropsWithChildren<ChipsProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Chips
      className={twMerge(`${variantStyles.info} ${className}`)}
      showIcon={true}
      {...props}
    >
      {children}
    </Chips>
  );
};

export const ChipsSuccessIcon: React.FC<PropsWithChildren<ChipsProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Chips
      className={twMerge(`${variantStyles.success} ${className}`)}
      showIcon={true}
      {...props}
    >
      {children}
    </Chips>
  );
};
