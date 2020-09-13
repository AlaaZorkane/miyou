import React, { DetailedHTMLProps } from "react";
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
  register: ({ required }: { required?: boolean }) => RefReturn;
};

export function Input(props: Props): JSX.Element {
  const { register, required, className, errors, ...inputProps } = props;
  const isError = errors ? "border-red-600" : "border-white";
  return (
    <>
      <input
        {...inputProps}
        ref={register({ required })}
        className={`bg-transparent focus:outline-none font-thin text-white ${isError} border-solid border rounded-sm p-2 ${className}`}
      />
    </>
  );
}
