import { Image, Button } from "react-bootstrap";
import { React, useState } from "react";

import { CaseModal } from "./CaseModal";

export const Case = (props) => {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   return (
      <div
         style={{
            display: "flex",
            marginTop: "10px",
            backgroundColor: "white",
            borderStyle: "solid",
            border: "5px solid #dee2e6",
            width: "700px",
         }}
      >
         <Image
            style={{ margin: "5px" }}
            width={64}
            height={64}
            roundedCircle
            src={props.logo}
         ></Image>
         <div
            style={{ display: "flex", flexDirection: "column", width: "700px" }}
         >
            <strong style={{ marginLeft: "3%" }}>{props.vacancy}</strong>
            <a style={{ color: "gray", marginLeft: "3%" }}>{props.comp}</a>
            <a style={{ marginLeft: "3%" }}>{props.opis}</a>
            <div style={{ textAlign: "right", margin: "5px" }}>
               <Button variant="success" onClick={handleShow}>
                  Начать
               </Button>
            </div>
         </div>
         <CaseModal onHide={handleClose} show={show}></CaseModal>
      </div>
   );
};
