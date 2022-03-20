import React from "react";

import { Modal, Image, Button, Form } from "react-bootstrap";
import logo from "../assets/jobs/job1.png";
import roba from "../assets/CompaniesLogos/gems_logo.png";

export const ResponseModal = (props) => {
   return (
      <Modal
         {...props}
         size="lg"
         aria-labelledby="contained-modal-title-vcenter"
         centered
      >
         <Modal.Header closeButton>
            <Modal.Title>
               <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  <Image
                     src={props.roba}
                     roundedCircle
                     height={64}
                     width={64}
                  />
                  <strong style={{ marginLeft: "3%", width: "600px" }}>{props.vacancy}</strong>
               </div>
            </Modal.Title>
         </Modal.Header>
         <Modal.Body style={{ display: "flex", justifyContent: "flex-start" }}>
            <Image
               style={{ borderRadius: "1%" }}
               src={props.logo}
               height={256}
               width={256}
            />
            <div style={{width: "-webkit-fill-available"}}>
            <p style={{ marginLeft: "3%" }}>Заработная плата: {props.zp}</p>
            <p style={{ marginLeft: "3%" }}>Трудоустройство: {props.tryd}</p>
            <p style={{ marginLeft: "3%" }}>Требуемый опыт: {props.exp}</p>
            <p style={{ marginLeft: "3%" }}>Занятость: {props.zan}</p>
            <p style={{ marginLeft: "3%" }}>{props.opis}</p>
            </div>
         </Modal.Body>
         <Modal.Footer style={{justifyContent: "space-evenly"}}>
            <Button variant="success">Подтвердить</Button>
            <Button style={{backgroundColor: "#03a7e6"}}>Поменять время</Button>
            <Button variant="secondary">Отменить</Button>
         </Modal.Footer>
      </Modal>
   );
};