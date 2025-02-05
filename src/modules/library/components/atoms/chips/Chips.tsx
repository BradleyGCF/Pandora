import React from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";

export type ChipsProps = {
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
  variant?:
    | "neutral"
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "info"
    | "success";
};

export const Chips: React.FC<ChipsProps> = ({
  children,
  className,
  showIcon = false,
  variant = "neutral",
}) => {
  const baseStyles =
    "py-1 px-4 rounded-full text-md font-medium transition-all";
  const variantStyles = {
    neutral: "",
    primary: "",
    secondary: "",
    danger: "",
    warning: "",
    info: "",
    success: "",
  };

  return (
    <div className="flex gap-1">
      <div
        className={` ${baseStyles} ${variantStyles[variant]} ${className} flex justify-center items-center`}
      >
        {children}
        {showIcon && <XCircleIcon className={`w-5 h-5 ml-2`} />}
      </div>
    </div>
  );
};
