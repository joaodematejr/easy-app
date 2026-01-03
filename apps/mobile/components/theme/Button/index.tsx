import {
  RestyleTouchableOpacity,
  RestyleTouchableOpacityProps,
  Text,
  TextProps,
} from "@/components/restyle";
import { Theme } from "@/theme";
import { useTheme } from "@shopify/restyle";
import React from "react";

export type ButtonProps = RestyleTouchableOpacityProps & {
  text?: string;
  textProps?: TextProps;
};

export default function Button({
  text,
  textProps,
  variant = "default",
  children,
  ...props
}: ButtonProps) {
  const theme = useTheme<Theme>();

  const btnVariant =
    // @ts-ignore
    theme.buttonVariants?.[variant] ?? theme.buttonVariants.default;

  const textColorToken = btnVariant?.color ?? "buttonTextLight";

  return (
    <RestyleTouchableOpacity activeOpacity={0.7} variant={variant} {...props}>
      {text && (
        <Text
          variant="button"
          {...textProps}
          color={(textProps?.color ?? textColorToken) as any}
        >
          {text}
        </Text>
      )}
      {children}
    </RestyleTouchableOpacity>
  );
}
