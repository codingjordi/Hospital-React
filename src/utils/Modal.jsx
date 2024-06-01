function Modal({ isOpen, onCancel, onConfirm, message }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>{message}</p>
        <div className="modal-buttons">
          <button onClick={onCancel} className="modal-cancel-button">Cancelar</button>
          <button onClick={onConfirm} className="modal-confirm-button">Aceptar</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
