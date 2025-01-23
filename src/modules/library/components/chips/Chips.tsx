import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type ChipsProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "neutral" | "primary" | "secondary" | "danger" | "warning" | "info" | "success";
};

const variantStyles = {
  neutral: "",
  primary: "",
  secondary: "",
  danger: "",
  warning: "",
  info: "",
  success: "",
}

export const Chips: React.FC<ChipsProps> = ({
  children,
  className,
  variant = "neutral",
}) => {
  const baseStyles = "py-2 px-4 rounded focus:outline-none transition-all";
  const variantStyles = {
    neutral: "",
    primary: "",
    secondary: "",
    danger: "",
    warning: "",
    info: "",
    success: "",
  }


  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-center items-center">
        <span
          className={`${baseStyles} ${variantStyles[variant]} ${className}`}>{children}</span>
      </div>
    </div>
  );
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
