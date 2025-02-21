import React from 'react'
import { twMerge } from 'tailwind-merge';

export type IndicatorProps = {
  variant?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string; 
}

const variantStyles = {
  xs: "",
  sm: "",
  md: "",
  lg: "",
  xl: "",
}

export const Indicator: React.FC<IndicatorProps> = ({className}) => {
  return (
    <div className={twMerge("w-7 p-1 shadow-md", className )}>
      <span className='flex h-1.5 w-1.5 rounded-full bg-green-400'></span>
    </div>
  )
}
