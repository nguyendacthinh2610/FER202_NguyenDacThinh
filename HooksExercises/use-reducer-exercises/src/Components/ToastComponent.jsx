// Tạo 1 ToastCoponent dùng chung cho LoginForm và SignUpForm hiện ở giữa khi scroll lên trên cùng
import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

function ToastComponent({ show, message, handleClose }) {
  return (
    <ToastContainer position="top-end" className="p-3">
      <Toast show={show} onClose={handleClose}>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default ToastComponent;