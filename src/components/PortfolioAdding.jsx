import React, { useState } from "react";
import {
   Modal,
   Button,
   Form,
   FloatingLabel,
   ToastContainer,
   Toast,
} from "react-bootstrap";

import { PortFolioItem } from "./PortfolioItem";

export const PortfolioAdding = (props) => {
   const [show, setShow] = useState(false);
   
   return (
      <>
         <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
         >
            <Modal.Header closeButton>
               <Modal.Title>Прикрепить портфолио</Modal.Title>
            </Modal.Header>
            <Modal.Body>               
               <PortFolioItem></PortFolioItem>
            </Modal.Body>
            <Modal.Footer>
               <Button
                  variant="secondary"
                  onClick={() => {
                     props.onHide();
                  }}
               >
                  Отменить
               </Button>
               <Button
                  variant="success"
                  onClick={() => {
                     props.onHide();
                     setShow(true);
                  }}
               >
                  Сохранить
               </Button>
            </Modal.Footer>
         </Modal>

         <ToastContainer
            style={{ marginTop: "5%" }}
            position="top-end"
            className="p-3"
         >
            <Toast
               onClose={() => setShow(false)}
               show={show}
               delay={3000}
               autohide
            >
               <Toast.Header>
                  <strong className="me-auto">Портфолио добавлено</strong>
               </Toast.Header>
            </Toast>
         </ToastContainer>
      </>
   );
};
