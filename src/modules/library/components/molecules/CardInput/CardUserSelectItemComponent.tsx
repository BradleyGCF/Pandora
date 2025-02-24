import { AvatarsComponent } from "../../atoms/avatars";
import { CardUserSelectItem, CardUserSelectItemProps } from "./CardUserSelectItem";

const variantStyles = {
  default: "border-2 border-purple-700",
  hover: "border-2 hover:ring-purple-700 hover:border-purple-700",
  focus: "border-4 focus:border-[#D1C4E9] outline-none border-[#D1C4E9]",
  disabled: "border-2 bg-[#EDE7F6] cursor-not-allowed outline-none hover:none text-[#828282]",
  }

export const CardUserSelectItemSmDefault: React.FC<
  Omit<CardUserSelectItemProps, "AvatarComponent">
> = (props) => {
  return <CardUserSelectItem {...props} className={variantStyles.default} AvatarsComponent={AvatarsComponent.AvatarsSm} />;
};

export const CardUserSelectItemSmHover: React.FC<
  Omit<CardUserSelectItemProps, "AvatarComponent">
> = (props) => {
  return <CardUserSelectItem {...props} className={variantStyles.hover} AvatarsComponent={AvatarsComponent.AvatarsSm} />;
};

export const CardUserSelectItemSmFocus: React.FC<
  Omit<CardUserSelectItemProps, "AvatarComponent">
> = (props) => {
  return <CardUserSelectItem {...props} className={variantStyles.focus} AvatarsComponent={AvatarsComponent.AvatarsSm} />;
};

export const CardUserSelectItemSmDisabled: React.FC<
  Omit<CardUserSelectItemProps, "AvatarComponent">
> = (props) => {
  return <CardUserSelectItem {...props} className={variantStyles.disabled} AvatarsComponent={AvatarsComponent.AvatarsSm} />;
};

// export const CardUserSelectItemMd: React.FC<
//   Omit<CardUserSelectItemProps, "AvatarComponent">
// > = (props) => {
//   return <CardUserSelectItem {...props} AvatarsComponent={AvatarsComponent.AvatarsMd} />;
// };

// export const CardUserSelectItemLg: React.FC<
//   Omit<CardUserSelectItemProps, "AvatarComponent">
// > = (props) => {
//   return <CardUserSelectItem {...props} AvatarsComponent={AvatarsComponent.AvatarsLg} />;
// };