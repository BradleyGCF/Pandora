import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

export type CheckboxGroupProps = {
  checkboxStyle?: string;
  className?: string;
  labelStyle?: string;
  onChange?: (selected: string[]) => void;
  options?: string[];
  selectedValues?: string[];
};

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  checkboxStyle,
  className,
  labelStyle,
  onChange,
  options = [],
  selectedValues = [],
}) => {
  const [selected, setSelected] = useState<string[]>(selectedValues);

  useEffect(() => {
    setSelected(selectedValues);
  }, [selectedValues]);

  const handleChange = (label: string, checked: boolean) => {
    const newSelected = checked
      ? [...selected, label]
      : selected.filter((v) => v !== label);

    setSelected(newSelected);
    onChange?.(newSelected);
  };

  return (
    <ul className={twMerge("flex flex-col gap-2 bg-white shadow-md p-4 rounded-lg", className)}>
      {options.map((label) => (
        <li key={label}>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={selected.includes(label)}
              onChange={(e) => handleChange(label, e.target.checked)}
              className="peer hidden"
            />
            <div
              className={twMerge(
                `w-5 h-5 border-2 border-[#828282] rounded-sm flex items-center justify-center transition-all bg-white 
                peer-checked:bg-gray-700 peer-checked:border-transparent`,
                checkboxStyle
              )}
            >
              {selected.includes(label) && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 13 13"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.4516 2.46958C12.7862 2.82011 12.7733 3.37551 12.4228 3.71011L5.79935 10.0754C5.62835 10.2387 5.39871 10.326 5.16245 10.3176C4.92619 10.3092 4.7033 10.2059 4.54428 10.031L1.30827 6.53714C0.982299 6.17858 1.00872 5.62365 1.36729 5.29769C1.72585 4.97172 2.28077 4.99814 2.60674 5.35671L5.238 8.1853L11.2111 2.44073C11.5617 2.10614 12.1171 2.11905 12.4516 2.46958Z"
                    fill="white"
                  />
                </svg>
              )}
            </div>
            <span className={twMerge("text-gray-800", labelStyle)}>{label}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};
