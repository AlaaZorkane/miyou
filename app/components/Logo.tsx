import React from "react";

type Props = {
  size?: string;
};

export function Logo(props: Props): JSX.Element {
  const sizeStyle = props.size || "text-mini-adam-xl";
  return (
    <h1 className={`font-thin inline-block -mx-1 ${sizeStyle} relative`}>
      <p style={{ top: 0, right: 4 }} className="absolute text-lg">
        見よう
      </p>
      miyou
    </h1>
  );
}
