import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { CheckboxSimple } from "../../atoms/checkbox/CheckboxComponent";
import { AvatarsSm } from "../../main";

export interface CardUserSelectItemProps {
  className?: string;
  AvatarsComponent?: React.FC<any>;
  variant?: "default" | "hover" | "focus" | "disabled";
}

export const CardUserSelectItem: React.FC<CardUserSelectItemProps> = ({
  className,
  AvatarsComponent = AvatarsSm,
  variant = "default"
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const variantStyles = {
  default: "",
  hover: "",
  focus: "",
  disabled: "",
  }

  const disabled = "";

  return (
    <div
      className={twMerge(
        "flex justify-between w-96 p-2 border border-[#D1D5DB] rounded-lg transition-all peer",
        className, variantStyles[variant], disabled
      )}
    >
      <div className="flex items-center gap-3">
        <AvatarsComponent/>
      </div>

      <CheckboxSimple
      disabled
        checked={isChecked}
        onChange={setIsChecked}
      />
    </div>
  );
};
