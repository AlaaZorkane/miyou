import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";

type Props = {
  bg?: string;
  color?: string;
  font?: string;
} & HTMLMotionProps<"button">;

export function Button(props: Props): JSX.Element {
  const { className, children, bg, color, font, ...buttonProps } = props;
  const bgStyle = bg || "bg-gray-400 bg-opacity-25";
  const colorStyle = color;
  const fontStyle = font || "font-thin";
  return (
    <motion.button
      {...buttonProps}
      whileTap={{
        x: 0,
        y: 0,
      }}
      whileHover={{
        x: 2,
        y: -2,
      }}
      className={`py-2 px-4 uppercase rounded-sm focus:outline-none ${fontStyle} ${bgStyle} ${colorStyle} ${className}`}
    >
      {children}
    </motion.button>
  );
}
