import React from "react";
import { twMerge } from "tailwind-merge";

export type CheckboxProps = {
  checkboxPosition?: "left" | "right";
  checkboxStyle?: string;
  checked?: boolean;
  className?: string;
  description?: string;
  descriptionStyle?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  labelStyle?: string;
  onChange?: (checked: boolean) => void;
  showIcon?: boolean;
  title?: string;
  variant?: "default" | "hover" | "focus" | "disabled";
};

export const Checkbox: React.FC<CheckboxProps> = ({
  checkboxPosition = "right",
  checkboxStyle,
  checked,
  className,
  description,
  descriptionStyle,
  disabled = false,
  icon,
  labelStyle,
  onChange,
  showIcon = false,
  title,
  variant = "default",
}) => {
  const variantStyles = {
    default: "",
    hover: "",
    focus: "",
    disabled: "",
  };

  const disabledStyles = "cursor-not-allowed";

  return (
    <div
      className={twMerge(
        `${disabled ? disabledStyles : ""} ${variantStyles[variant]} ${className} flex gap-x-1.5 p-4 rounded-xl`
      )}
    >
      {checkboxPosition === "left" && (
        <label className="flex cursor-pointer">
          <input
            disabled={disabled}
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange?.(e.target.checked)}
            className="peer hidden"
          />
          <div
            className={twMerge(
              `w-5 h-5 rounded-sm flex items-center justify-center transition-all
              ${
                disabled
                  ? "bg-[#828282] border-gray-300 cursor-not-allowed peer-checked:bg-gray-500 peer-checked:border-gray-500"
                  : "bg-gray-100 cursor-pointer border-gray-400 peer-checked:bg-purple-700 peer-checked:border-purple-700"
              } ${checkboxStyle} 
             `
            )}
          >
            {checked && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 13 13"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.4516 2.46958C12.7862 2.82011 12.7733 3.37551 12.4228 3.71011L5.79935 10.0754C5.62835 10.2387 5.39871 10.326 5.16245 10.3176C4.92619 10.3092 4.7033 10.2059 4.54428 10.031L1.30827 6.53714C0.982299 6.17858 1.00872 5.62365 1.36729 5.29769C1.72585 4.97172 2.28077 4.99814 2.60674 5.35671L5.238 8.1853L11.2111 2.44073C11.5617 2.10614 12.1171 2.11905 12.4516 2.46958Z"
                  fill="white"
                />
              </svg>
            )}
          </div>
        </label>
      )}

      <div className="flex items-center">
        {showIcon && icon && (
          <div className="bg-[#EDE7F6] p-2 rounded-full">
            <span>{icon}</span>
          </div>
        )}
      </div>

      <div className="flex flex-col w-full">
        <div className="flex text-sm">
          <label className={twMerge(`font-medium ${labelStyle}`)}>
            {title}
          </label>
        </div>
        <p
          className={twMerge(
            `text-xs font-normal text-[#828282] ${descriptionStyle}`
          )}
        >
          {description}
        </p>
      </div>

      {checkboxPosition === "right" && (
        <label className="relative flex  cursor-pointer">
          <input
            disabled={disabled}
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange?.(e.target.checked)}
            className="peer hidden"
          />
          <div
            className={twMerge(`w-5 h-5 rounded-sm flex items-center justify-center transition-all
            ${
              disabled
                ? "bg-[#828282] border-gray-300 cursor-not-allowed peer-checked:bg-gray-500 peer-checked:border-gray-500"
                : "bg-gray-100 cursor-pointer border-gray-400 peer-checked:bg-purple-700 peer-checked:border-purple-700"
            } ${checkboxStyle}
          `)}
          >
            {checked && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 13 13"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.4516 2.46958C12.7862 2.82011 12.7733 3.37551 12.4228 3.71011L5.79935 10.0754C5.62835 10.2387 5.39871 10.326 5.16245 10.3176C4.92619 10.3092 4.7033 10.2059 4.54428 10.031L1.30827 6.53714C0.982299 6.17858 1.00872 5.62365 1.36729 5.29769C1.72585 4.97172 2.28077 4.99814 2.60674 5.35671L5.238 8.1853L11.2111 2.44073C11.5617 2.10614 12.1171 2.11905 12.4516 2.46958Z"
                  fill="white"
                />
              </svg>
            )}
          </div>
        </label>
      )}
    </div>
  );
};
