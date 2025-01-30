export type AlertProps = {
  action?: boolean;
  className?: string;
  description: string;
  size?: "small" | "medium";
  title: string;
  variant?: "filled" | "outlined" | "standard";
  icon?: React.ReactNode;
};

export const Alert: React.FC<AlertProps> = ({
  // action = false,
  size = "small",
  className,
  description,
  icon,
  title,
  variant = "filled",
}) => {
  const baseStyles = "w-80 px-4 py-2 rounded-sm text-white";

  const variantStyles = {
    filled: "",
    outlined: "",
    standard: "",
  };

  const variantSize = {
    small: "",
    medium: "w-80 px-4 py-2 rounded-sm",
  };

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${variantSize[size]} ${className}`}
      role="alert"
    >
      <div className="flex items-center">
        <div className="mr-2">
          {icon}
        </div>
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      <div className="ml-8 mt-0">{description}</div>
    </div>
  );
};

