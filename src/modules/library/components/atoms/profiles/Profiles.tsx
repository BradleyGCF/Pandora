import React from "react";
import { twMerge } from "tailwind-merge";

export type ProfilesProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  variant?: "default" | "border" | "online";
  imageSrc?: string;
  className?: string;
  border?: boolean;
};

export const Profiles: React.FC<ProfilesProps> = ({
  border = false,
  className,
  imageSrc = "/Ellipse2.svg",
  size = "xs",
  variant = "default",
}) => {
  // Estilos según el tamaño del avatar
  const sizeStyles = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
    xxl: "w-20 h-20",
  };

  // Estilos del borde si está activo
  const borderStyle = border ? "border-2 border-gray-300 rounded-full" : "";

  return (
    <div className={twMerge("relative flex items-center", className)}>
      <img
        src={imageSrc}
        alt="Profile"
        className={twMerge(
          "rounded-full object-cover",
          sizeStyles[size],
          borderStyle
        )}
      />

      {variant === "online" && (
        <span
          className={twMerge(
            "absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white",
            
          )}
        />
      )}
    </div>
  );
};
