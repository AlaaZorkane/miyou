import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Button(props: Props): JSX.Element {
  const { className, children, ...buttonProps } = props;
  return (
    <button
      {...buttonProps}
      className={`py-2 px-4 uppercase rounded-sm font-thin bg-gray-400 bg-opacity-25 ${className}`}
    >
      {children}
    </button>
  );
}
