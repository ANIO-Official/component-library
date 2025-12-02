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
        <h2>{message}</h2>
        <br />
        <button onClick={onClose}>Close</button>
        <br/>
        {children}        
      </div>
    </>
  );
}
