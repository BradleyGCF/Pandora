import { XMarkIcon } from "@heroicons/react/24/outline";

export type AlertProps = {
  action?: boolean;
  className?: string;
  close?: boolean;
  description?: string;
  icon?: React.ReactNode;
  title?: string;
  variant?: "filled" | "outlined" | "standard";
};

export const Alert: React.FC<AlertProps> = ({
  className,
  close = false,
  description,
  icon,
  title,
  variant = "filled",
}) => {
  const baseStyles = "w-80 px-4 py-2 rounded-sm";

  const variantStyles = {
    filled: "",
    outlined: "",
    standard: "",
  };

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      role="alert"
    >
      <div className="flex items-center">
        <div className="mr-2">{icon}</div>
        <h3 className="text-lg font-medium">{title || description}</h3>
        {close && (
          <button
            type="button"
            className="ms-auto -mx-1.5 -my-1.5 p-1.5 inline-flex items-center justify-center h-8 w-8 outline-none"
            data-dismiss-target="#alert-1"
            aria-label="Close"
          >
            <XMarkIcon />
          </button>
        )}
      </div>
      {title && description && <div className="ml-8 mt-0">{description}</div>}
    </div>
  );
};
