import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";

type Props = {
  bg?: string;
  color?: string;
  font?: string;
  isLoading?: boolean;
} & HTMLMotionProps<"button">;

// TODO: make animations variants and conditionally disabled
// when button is disabled
export function Button(props: Props): JSX.Element {
  const {
    className,
    children,
    bg,
    color,
    font,
    disabled,
    isLoading,
    ...buttonProps
  } = props;
  const bgStyle = bg || "bg-gray-400 bg-opacity-25";
  const colorStyle = color;
  const fontStyle = font || "font-light";
  return (
    <motion.button
      {...buttonProps}
      disabled={disabled || isLoading}
      aria-disabled={isLoading}
      whileTap={{
        x: 0,
        y: 0,
      }}
      whileHover={{
        x: 0,
        y: -2,
      }}
      className={`py-2 px-4 uppercase rounded-sm focus:outline-none ${fontStyle} ${bgStyle} ${colorStyle} ${className}`}
    >
      {isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : children}
    </motion.button>
  );
}
