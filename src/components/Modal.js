import ReactDom from "react-dom";
import "./Modal.css";

export default function Modal({ children, isSalesModal }) {
  return ReactDom.createPortal(
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{
          border: "4px solid",
          borderColor: isSalesModal ? "#639" : "#333",
          textAlign: "center",
        }}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
