import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { Input, InputProps } from "./Input";
import { UserIcon } from "@heroicons/react/24/solid";

const variantStyles = {
  default:
    "border-b-2 border-borderline p-2 outline-none rounded-none text-[hsl(var(--text-color-disabled))] w-[var(--input-width)] h-[var(--input-height)] ",
  hover:
    "border-b-2 border-borderline p-2 outline-none hover:ring-[hsl(var(--hover-border-default))] rounded-none focus:border-blue-500 text-black w-[var(--input-width)] h-[var(--input-height)] p-[var(--input-padding)] hover:border-[hsl(var(--hover-border-default))] ",
  active:
    "border-b-2 border-borderline p-2 outline-none text-black rounded-none w-[var(--input-width)] h-[var(--input-height)] p-[var(--input-padding)]",
  disabled:
    "border-b-2 border-borderline p-2 outline-none text-[hsl(var(--text-color-disabled))] rounded-none w-[var(--input-width)] h-[var(--input-height)] p-[var(--input-padding)]",
};

export const InputLine: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  type = "text",
  ...props
}) => {
  return (
    <Input
      className={twMerge(`${variantStyles.default} ${className}`)}
      type={type}
      variant="line"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputLineHover: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  type = "text",
  ...props
}) => {
  return (
    <Input
      className={twMerge(`${variantStyles.hover} ${className}`)}
      type={type}
      variant="line"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputLineActive: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  type = "text",
  ...props
}) => {
  return (
    <Input
      className={twMerge(`${variantStyles.active} ${className}`)}
      type={type}
      variant="line"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputLineDisabled: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  type = "text",
  ...props
}) => {
  return (
    <Input
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      type={type}
      variant="line"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputLineIcon: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  icon,
  type = "text",
  ...props
}) => {
  return (
    <Input
      className={twMerge(`${variantStyles.default} ${className}`)}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />}
      showIcon={true}
      type={type}
      variant="line"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputLineHoverIcon: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  icon,
  type = "text",
  ...props
}) => {
  return (
    <Input
      className={twMerge(`${variantStyles.hover} ${className}`)}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />}
      showIcon={true}
      type={type}
      variant="line"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputLineActiveIcon: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  icon,
  type = "text",
  ...props
}) => {
  return (
    <Input
      {...props}
      type={type}
      variant="line"
      className={twMerge(`${variantStyles.active} ${className}`)}
      showIcon={true}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />}
    >
      {children}
    </Input>
  );
};

export const InputLineDisabledIcon: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  icon,
  type = "text",
  ...props
}) => {
  return (
    <Input
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      icon={icon || <UserIcon className="w-5 h-5 text-gray-500" />}
      showIcon={true}
      type={type}
      variant="line"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputLineError: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  type = "text",
  ...props
}) => {
  return (
    <Input
      {...props}
      type={type}
      variant="line"
      className={twMerge(
        `${variantStyles.default} ${className} border-red-400`
      )}
    >
      {children}
    </Input>
  );
};

export const InputLineHoverError: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  type = "text",
  ...props
}) => {
  return (
    <Input
      {...props}
      type={type}
      variant="line"
      className={twMerge(`${variantStyles.hover} ${className} border-red-400`)}
    >
      {children}
    </Input>
  );
};

export const InputLineActiveError: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  type = "text",
  ...props
}) => {
  return (
    <Input
      {...props}
      type={type}
      variant="line"
      className={twMerge(`${variantStyles.active} ${className} border-red-400`)}
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputLineDisabledError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, type = "text", ...props }) => {
  return (
    <Input
      className={twMerge(
        `${variantStyles.disabled} ${className} border-red-400`
      )}
      disabled
      type={type}
      variant="line"
      {...props}
    >
      {children}
    </Input>
  );
};

export const InputLineIconError: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  className,
  icon,
  type = "text",
  ...props
}) => {
  return (
    <Input
      {...props}
      type={type}
      variant="line"
      className={twMerge(
        `${variantStyles.default} ${className} border-red-400`
      )}
      showIcon={true}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />}
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputLineHoverIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, icon, type = "text", ...props }) => {
  return (
    <Input
      {...props}
      type={type}
      variant="line"
      className={twMerge(`${variantStyles.hover} ${className} border-red-400`)}
      showIcon={true}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />}
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputLineActiveIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, icon, type = "text", ...props }) => {
  return (
    <Input
      {...props}
      type={type}
      variant="line"
      className={twMerge(`${variantStyles.active} ${className} border-red-400`)}
      showIcon={true}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />}
      error={true}
    >
      {children}
    </Input>
  );
};

export const InputLineDisabledIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({ children, className, icon, type = "text", ...props }) => {
  return (
    <Input
      className={twMerge(
        `${variantStyles.disabled} ${className} border-red-400`
      )}
      disabled
      error={true}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-500" />}
      showIcon={true}
      type={type}
      variant="line"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputLineHelper: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      className={twMerge(`${variantStyles.default} ${className}`)}
      helperText={helperText}
      label={label}
      type={type}
      variant="line"
      {...props}
    >
      {children}
    </Input>
  );
};
export const LabeledInputLineHelperHover: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      className={twMerge(`${variantStyles.hover} ${className}`)}
      helperText={helperText}
      label={label}
      type={type}
      variant="line"
      {...props}
    >
      {children}
    </Input>
  );
};
export const LabeledInputLineHelperActive: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      className={twMerge(`${variantStyles.active} ${className}`)}
      helperText={helperText}
      label={label}
      type={type}
      variant="line"
      {...props}
    >
      {children}
    </Input>
  );
};
export const LabeledInputLineHelperDisabled: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      helperText={helperText}
      label={label}
      type={type}
      variant="line"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputLineHelperIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  icon,
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      className={twMerge(`${variantStyles.default} ${className}`)}
      disabled
      helperText={helperText}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />}
      label={label}
      showIcon={true}
      type={type}
      variant="line"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputLineHelperHoverIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  icon,
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      className={twMerge(`${variantStyles.hover} ${className}`)}
      helperText={helperText}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />}
      label={label}
      showIcon={true}
      type={type}
      variant="line"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputLineHelperActiveIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  icon,
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      className={twMerge(`${variantStyles.active} ${className}`)}
      helperText={helperText}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />}
      label={label}
      showIcon={true}
      type={type}
      variant="line"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputLineHelperDisabledIcon: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  icon,
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      helperText={helperText}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-500" />}
      label={label}
      showIcon={true}
      type={type}
      variant="line"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputLineHelperIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  icon,
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      className={twMerge(
        `${variantStyles.default} ${className} border-red-400`
      )}
      disabled
      error={true}
      helperText={helperText}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />}
      label={label}
      showIcon={true}
      type={type}
      variant="line"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputLineHelperHoverIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  icon,
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      className={twMerge(`${variantStyles.hover} ${className} border-red-400`)}
      error={true}
      helperText={helperText}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />}
      label={label}
      showIcon={true}
      type={type}
      variant="line"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputLineHelperActiveIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  icon,
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      className={twMerge(`${variantStyles.active} ${className} border-red-400`)}
      error={true}
      helperText={helperText}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />}
      label={label}
      showIcon={true}
      type={type}
      variant="line"
      {...props}
    >
      {children}
    </Input>
  );
};

export const LabeledInputLineHelperDisabledIconError: React.FC<
  PropsWithChildren<InputProps>
> = ({
  children,
  className,
  helperText = "Input Helper Text",
  icon,
  label = "Input Label",
  type = "text",
  ...props
}) => {
  return (
    <Input
      className={twMerge(`${variantStyles.disabled} ${className}`)}
      disabled
      helperText={helperText}
      icon={icon || <UserIcon className="w-5 h-5 text-gray-700" />}
      label={label}
      showIcon={true}
      type={type}
      variant="line"
      {...props}
    >
      {children}
    </Input>
  );
};
