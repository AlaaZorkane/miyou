import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";

type Props = FontAwesomeIconProps & HTMLMotionProps<"button">;

export function IconButton(props: Props): JSX.Element {
  const { className, icon, size, ...buttonProps } = props;
  return (
    <motion.button
      {...buttonProps}
      aria-label="Icon button"
      className={`focus:outline-none flex align-bottom ${className}`}
    >
      <FontAwesomeIcon icon={icon} size={size} />
    </motion.button>
  );
}
