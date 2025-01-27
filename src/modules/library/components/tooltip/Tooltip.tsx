import React from "react";

export type TooltipProps = {
  children: React.ReactNode;
  className?: string;
  text?: string;
  trianglePosition: "top" | "bottom" | "left" | "right";
  variant?: "neutral" | "primary" | "secondary" | "danger" | "warning" | "info" | "success";
};

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  trianglePosition,
  text,
  variant = "neutral",
}) => {
  const triangleClass = {
    top: "bottom-full mb-3",
    bottom: "top-full mt-3",
    left: "right-full mr-3",
    right: "left-full ml-3",
  };

  const triangleStyles = {
    top: "top-full left-1/2 transform -translate-x-1/2 border-t-8 border-l-8 border-l-transparent border-r-8 border-r-transparent",
    bottom: "bottom-full left-1/2 transform -translate-x-1/2 border-b-8 border-l-8 border-l-transparent border-r-8 border-r-transparent",
    left: "left-full top-1/2 transform -translate-y-1/2 border-l-8 border-t-8 border-t-transparent border-b-8 border-b-transparent",
    right: "right-full top-1/2 transform -translate-y-1/2 border-r-8 border-t-8 border-t-transparent border-b-8 border-b-transparent",
  };

  const variantStyles = {
    neutral: "bg-[hsl(var(--bg-tooltip-neutral))]",
    primary: "bg-[hsl(var(--bg-tooltip-primary))]",
    secondary: "bg-[hsl(var(--bg-tooltip-secondary))]",
    danger: "bg-[hsl(var(--bg-tooltip-danger))]",
    warning: "bg-[hsl(var(--bg-tooltip-warning))]",
    info: "bg-[hsl(var(--bg-tooltip-info))]",
    success: "bg-[hsl(var(--bg-tooltip-success))]",
  };

  const triangleColors = {
    neutral: "border-t-[hsl(var(--bg-tooltip-neutral))] border-b-[hsl(var(--bg-tooltip-neutral))]",
    primary: "border-t-[hsl(var(--bg-tooltip-primary))] border-b-[hsl(var(--bg-tooltip-primary))]",
    secondary: "border-t-[hsl(var(--bg-tooltip-secondary))] border-b-[hsl(var(--bg-tooltip-secondary))]",
    danger: "border-t-[hsl(var(--bg-tooltip-danger))] border-b-[hsl(var(--bg-tooltip-danger))]",
    warning: "border-t-[hsl(var(--bg-tooltip-warning))] border-b-[hsl(var(--bg-tooltip-warning))]",
    info: "border-t-[hsl(var(--bg-tooltip-info))] border-b-[hsl(var(--bg-tooltip-info))]",
    success: "border-t-[hsl(var(--bg-tooltip-success))] border-b-[hsl(var(--bg-tooltip-success))]",
  };

  const triangleColorsLeft = {
    neutral: 'border-l-[hsl(var(--bg-tooltip-neutral))] ',
    primary: 'border-l-[hsl(var(--bg-tooltip-primary))]',
    secondary: 'border-l-[hsl(var(--bg-tooltip-secondary))]',
    danger: 'border-l-[hsl(var(--bg-tooltip-danger))]',
    warning: 'border-l-[hsl(var(--bg-tooltip-warning))]',
    info: 'border-l-[hsl(var(--bg-tooltip-info))]',
    success: 'border-l-[hsl(var(--bg-tooltip-success))]',
  };

  const triangleColorsRight = {
    neutral: 'border-r-[hsl(var(--bg-tooltip-neutral))] ',
    primary: 'border-r-[hsl(var(--bg-tooltip-primary))]',
    secondary: 'border-r-[hsl(var(--bg-tooltip-secondary))]',
    danger: 'border-r-[hsl(var(--bg-tooltip-danger))]',
    warning: 'border-r-[hsl(var(--bg-tooltip-warning))]',
    info: 'border-r-[hsl(var(--bg-tooltip-info))]',
    success: 'border-r-[hsl(var(--bg-tooltip-success))]',
  };

  const triangleBorderColorLeft = trianglePosition === 'left' || trianglePosition === 'right'
  ? triangleColorsLeft[variant]
  : triangleColors[variant];

  const triangleBorderColorRight = trianglePosition === 'left' || trianglePosition === 'right'
  ? triangleColorsRight[variant]
  : triangleColors[variant];

  return (
    <div className="relative group inline-block items-center">
      {children}
      <div
        className={`absolute whitespace-nowrap px-4 py-3 text-white text-sm rounded-[6px] hidden group-hover:block ${triangleClass[trianglePosition]} ${variantStyles[variant]}`}
      >
        {text}
        <div className={`absolute ${triangleStyles[trianglePosition]} ${triangleBorderColorLeft} ${triangleBorderColorRight}`} />
      </div>
    </div>
  );
};