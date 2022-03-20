import React from "react";

import { Modal, Image, Button, Form } from "react-bootstrap";
import logo from "../assets/jobs/job1.png";
import roba from "../assets/CompaniesLogos/gems_logo.png";

export const CaseModal = (props) => {
   return (
      <Modal
         {...props}
         size="sm"
         aria-labelledby="contained-modal-title-vcenter"
         centered
      >
         <Modal.Header closeButton>
         </Modal.Header>
         <Modal.Body style={{ display: "flex", justifyContent: "flex-start" }}>
           
            <div style={{width: "-webkit-fill-available", textAlign: "center"}}>
            <p>Вы уверены, что хотите начать?{props.zp}</p>
            </div>
         </Modal.Body>
         <Modal.Footer style={{justifyContent: "space-between"}}>
            <Button style={{backgroundColor: "#03a7e6", width: "125px"}}>Подтвердить</Button>
            <Button variant="secondary"style={{width: "125px"}}>Отменить</Button>
         </Modal.Footer>
      </Modal>
   );
};