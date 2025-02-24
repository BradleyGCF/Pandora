import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AvatarsSm } from "../../main";
import { CheckboxSimple } from "../../atoms/checkbox/CheckboxComponent";
import { CheckboxProps } from '../../atoms/checkbox/Checkbox';

interface CardUserSelectItemProps {
  className?: string;
  variant?: "default" | "hover" | "focus" | "disabled";
}

export const CardUserSelectItem: React.FC<CardUserSelectItemProps> = ({
  className,
  variant = "default"
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const variantStyles = {
  default: "border-2 border-purple-700",
  hover: "border-2 hover:ring-purple-700 hover:border-purple-700",
  focus: "border-4 focus:border-[#D1C4E9] outline-none border-[#D1C4E9]",
  disabled: "border-2 bg-[#EDE7F6] cursor-not-allowed outline-none hover:none text-[#828282]",
  }

  const disabled = "";

  return (
    <div
      className={twMerge(
        "flex justify-between w-96 cursor-not-allowed p-2 border border-[#D1D5DB] rounded-lg hover:bg-gray-50 transition-all  peer",
        className, variantStyles[variant], disabled
      )}
    >
      <div className="flex items-center gap-3">
        <AvatarsSm />
      </div>

      <CheckboxSimple
        checked={isChecked}
        onChange={setIsChecked}
      />
    </div>
  );
};
