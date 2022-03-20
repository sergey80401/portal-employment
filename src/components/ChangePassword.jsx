import React, { useState } from "react";
import {
   Modal,
   Button,
   Form,
   FloatingLabel,
   ToastContainer,
   Toast,
} from "react-bootstrap";

export const ChangePassword = (props) => {
   const [show, setShow] = useState(false);

   return (
      <>
         <Modal
            show={props.show}
            onHide={props.onHide}
            backdrop="static"
            keyboard={false}
         >
            <Modal.Header>
               <Modal.Title>Смена пароля</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <FloatingLabel style={{ marginTop: "3%" }} label="Новый пароль">
                  <Form.Control type="password" placeholder="Новый пароль" />
               </FloatingLabel>
               <FloatingLabel
                  style={{ marginTop: "3%" }}
                  label="Подтвердите пароль"
               >
                  <Form.Control
                     type="password"
                     placeholder="Подтвердите пароль"
                  />
               </FloatingLabel>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={props.onHide}>
                  Отмена
               </Button>
               <Button
                  variant="primary"
                  onClick={() => {
                     props.onHide();
                     setShow(true);
                  }}
               >
                  Сохранить
               </Button>
            </Modal.Footer>
         </Modal>

         <ToastContainer position="top-end" className="p-3">
            <Toast
               onClose={() => setShow(false)}
               show={show}
               delay={3000}
               autohide
            >
               <Toast.Header>
                  <strong className="me-auto">Пароль успешно изменен</strong>
               </Toast.Header>
            </Toast>
         </ToastContainer>
      </>
   );
};
