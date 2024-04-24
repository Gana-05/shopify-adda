import React from "react";

const sizeClasses = {
  txtGilroySemiBold32: "font-gilroy font-semibold",
  txtGilroyRegular16Gray90001: "font-gilroy font-normal",
  txtGilroySemiBold32Black900: "font-gilroy font-semibold",
  txtGilroyRegular16Bluegray400: "font-gilroy font-normal",
  txtGilroyMedium18BlueA700: "font-gilroy font-medium",
  txtGilroyRegular12: "font-gilroy font-normal",
  txtGilroyMedium24: "font-gilroy font-medium",
  txtGilroySemiBold18: "font-gilroy font-semibold",
  txtGilroyMedium18: "font-gilroy font-medium",
  txtGilroySemiBold28: "font-gilroy font-semibold",
  txtGilroyRegular16: "font-gilroy font-normal",
  txtGilroySemiBold16: "font-gilroy font-semibold",
  txtGilroyMedium16: "font-gilroy font-medium",
  txtGilroyRegular14: "font-gilroy font-normal",
  txtGilroyMedium16Bluegray800: "font-gilroy font-medium",
  txtGilroyMedium18Bluegray400: "font-gilroy font-medium",
  txtOpenSansMedium14: "font-medium font-opensans",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
