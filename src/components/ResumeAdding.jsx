import React, { useState } from "react";
import {
   Modal,
   Button,
   Form,
   FloatingLabel,
   ToastContainer,
   Toast,
} from "react-bootstrap";

export const ResumeAdding = (props) => {
   const [money, setMoney] = useState(50);
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
               <Modal.Title>Добавить резюме</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <div>
                  <FloatingLabel
                     controlId="floatingSelect"
                     label="Выбор профессии"
                     className="mb-3"
                  >
                     <Form.Select aria-label="Floating label select example">
                        {props.professions.map((item) => (
                           <option key={item.id}>{item.name}</option>
                        ))}
                     </Form.Select>
                  </FloatingLabel>
                  <FloatingLabel
                     controlId="floatingTextarea"
                     label="О себе"
                     className="mb-3"
                  >
                     <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                     />
                  </FloatingLabel>
                  <FloatingLabel
                     controlId="floatingTextarea2"
                     label="Интересы и увлечения"
                     className="mb-3"
                  >
                     <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                     />
                  </FloatingLabel>
                  <FloatingLabel
                     controlId="floatingTextarea2"
                     label="Навыки в отрасли"
                  >
                     <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                     />
                  </FloatingLabel>
                  <div
                     className="mt-3"
                     style={{
                        backgroundColor: "white",
                        borderRadius: "0.25rem",
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        padding: "1%",
                        justifyContent: "space-between",
                        alignItems: "center",
                     }}
                  >
                     <div style={{ display: "flex", flexDirection: "column" }}>
                        <Form.Check
                           type="radio"
                           label="Работа удаленно"
                           name="formHorizontalRadios"
                           id="formHorizontalRadios1"
                        />
                        <Form.Check
                           type="radio"
                           label="Работа в офисе"
                           name="formHorizontalRadios"
                           id="formHorizontalRadios1"
                           checked={true}
                        />
                     </div>
                     <div
                        style={{
                           display: "flex",
                           flexDirection: "column",
                           width: "78%",
                        }}
                     >
                        <div>
                           <Form.Label>Желаемая зарплата:</Form.Label>
                           <Form.Label style={{ marginLeft: "1%" }}>
                              {money * 1000} р
                           </Form.Label>
                        </div>
                        <Form.Range
                           onChange={(event) => setMoney(event.target.value)}
                        />
                        <div
                           style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                              padding: "1%",
                           }}
                        >
                           <Form.Label>|</Form.Label>
                           <Form.Label>|</Form.Label>
                           <Form.Label>|</Form.Label>
                           <Form.Label>|</Form.Label>
                           <Form.Label>|</Form.Label>
                           <Form.Label>|</Form.Label>
                           <Form.Label>|</Form.Label>
                           <Form.Label>|</Form.Label>
                           <Form.Label>|</Form.Label>
                           <Form.Label>|</Form.Label>
                           <Form.Label>|</Form.Label>
                        </div>
                     </div>
                  </div>
               </div>
            </Modal.Body>
            <Modal.Footer>
               <Form.Label></Form.Label>
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

         <ToastContainer style={{marginTop: "5%"}} position="top-end" className="p-3">
            <Toast
               onClose={() => setShow(false)}
               show={show}
               delay={3000}
               autohide
            >
               <Toast.Header>
                  <strong className="me-auto">Резюме добавлено</strong>
               </Toast.Header>
            </Toast>
         </ToastContainer>
      </>
   );
};
