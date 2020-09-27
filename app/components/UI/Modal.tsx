import { cloneElement, ReactElement, ReactNode } from "react";
import Popup from "reactjs-popup";
import { PopupProps } from "reactjs-popup/dist/types";

type Props = {
  children?: ReactNode;
} & PopupProps;

export function Modal(props: Props): JSX.Element {
  const { children, ...popupProps } = props;
  return (
    <Popup
      {...popupProps}
      modal
      overlayStyle={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
    >
      {(close: any) => cloneElement(children as ReactElement<any>, { close })}
    </Popup>
  );
}
