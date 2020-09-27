import React, { DetailedHTMLProps, ReactNode } from "react";
import { FieldError } from "react-hook-form";

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

type Props = DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  errors?: FieldError;
  border?: string;
  bg?: string;
  color?: string;
  prepend?: ReactNode;
  register: ({ required }: { required?: boolean }) => RefReturn;
};

export function Input(props: Props): JSX.Element {
  const {
    register,
    required,
    className,
    errors,
    border,
    bg,
    color,
    prepend,
    ...inputProps
  } = props;
  const borderStyle = border || "border-solid border";
  const isError = errors ? "border-red-600" : borderStyle;
  const bgStyle = bg || "bg-transparent";
  const colorStyle = color || "text-white";

  return (
    <div className="flex items-center">
      {prepend && (
        <label htmlFor={props.name} className="mr-2">
          {prepend}
        </label>
      )}
      <input
        {...inputProps}
        ref={register({ required })}
        className={`focus:outline-none font-thin rounded-sm p-2 ${colorStyle} ${borderStyle} ${bgStyle} ${isError} ${className}`}
      />
    </div>
  );
}
