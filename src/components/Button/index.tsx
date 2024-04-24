import React from "react";

const shapes = { square: "rounded-none", round: "rounded-md" } as const;
const variants = {
  outline: { blue_A700: "border border-blue-A700 border-solid text-blue-A700" },
  fill: {
    green_600: "bg-green-600 text-gray-50",
    blue_A700: "bg-blue-A700 text-white-A700",
  },
} as const;
const sizes = {
  xs: "p-1",
  sm: "p-3",
  md: "pr-3.5 py-3.5",
  lg: "p-[15px]",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  size = "lg",
  variant = "fill",
  color = "blue_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
