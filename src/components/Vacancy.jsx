import React from "react";
import { Modal, Image, Button, Form } from "react-bootstrap";

export const Vacancy = (props) => {
   return (
      <Modal
         {...props}
         size="lg"
         aria-labelledby="contained-modal-title-vcenter"
         centered
      >
         <Modal.Header closeButton>
            <Modal.Title>
               <div
                  style={{
                     display: "flex",
                     flexDirection: "row",
                     alignItems: "center",
                     justifyContent: "space-between"
                  }}
               >
                  <div style={{ width: "600px", display: "flex",flexDirection: "row",
                     alignItems: "center", }}>
                     <Image
                        src={props.logo}
                        roundedCircle
                        height={64}
                        width={64}
                     />
                     <strong style={{ marginLeft: "3%", width: "600px" }}>
                        {props.title}
                     </strong>
                  </div>
                  <Form.Label style={{marginLeft: "5%"}}>{props.money}</Form.Label>
               </div>
               
            </Modal.Title>
         </Modal.Header>
         <Modal.Body
            style={{ display: "flex", justifyContent: "space-between" }}
         >
            <Image
               style={{ borderRadius: "1%" }}
               src={props.mainImage}
               height={256}
               width={256}
            />
            <p style={{ marginLeft: "3%" }}>{props.text}</p>
         </Modal.Body>

         <Modal.Footer>
            <Button variant="success">Откликнуться</Button>
         </Modal.Footer>
      </Modal>
   );
};
