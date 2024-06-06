"use client";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  type?: "button" | "submit" | "reset";
}
const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
      relative
      disabled:opacity-70
      disabled:cursor-not-allowed
      rounded-xl
      hover:opacity-80
      transition
      w-full
      ${
        outline
          ? "bg-white hover:shadow-sm hover:shadow-zinc-500"
          : "bg-rose-500"
      }
      ${outline ? "border-2 border-black" : "border-rose-500"}
      ${outline ? "text-black" : "text-white"}

      ${small ? "py-1" : "py-3"}
      ${small ? "text-sm" : "text-md"}
      ${small ? "font-light" : "font-semibold"}
      ${small ? "border" : "font-semibold"}
      `}
    >
      {Icon && (
        <Icon
          size={24}
          className="
        absolute
        left-4
        top-3
        "
        />
      )}
      {label}
    </button>
  );
};

export default Button;
