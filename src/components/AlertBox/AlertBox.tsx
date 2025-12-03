import type { AlertBoxProps } from "../../types";

export default function AlertBox({
  type,
  message,
  onClose,
  children,
}: AlertBoxProps) {
  return (
    <>
      <div className={`${type}-alert`}>
        <span className="Message mb-3"><b>{message}</b></span>
        <br/>
        <button className="close-button" onClick={onClose} hidden={onClose===undefined}>Close X</button>
        <br/>
        {children}        
      </div>
    </>
  );
}
