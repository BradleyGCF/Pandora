import React, { useState } from "react";

export type CheckboxGroupProps = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  checked = false,
  onChange,
}) => {
  return (
    <label className="relative flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="peer hidden"
      />
      <div
        className="w-5 h-5 bg-gray-200 rounded-md flex items-center justify-center peer-checked:bg-gray-900 peer-checked:border-gray-900 transition-all"
      >
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12l4 4L19 7" />
          </svg>
        )}
      </div>
    </label>
  );
};