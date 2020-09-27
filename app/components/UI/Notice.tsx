import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

type Props = {
  icon: IconDefinition;
  children?: ReactNode;
  className?: string;
};

export function Notice({
  icon,
  children,
  className = "bg-white text-black",
}: Props): JSX.Element {
  const style = `flex place-items-center p-5 rounded-sm ${className}`;
  return (
    <div aria-label="Notice text" className={style}>
      <FontAwesomeIcon aria-label="Notice icon" icon={icon} size="2x" />
      <p aria-label="Notice message" className="ml-3">
        {children}
      </p>
    </div>
  );
}
