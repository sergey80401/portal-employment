import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import { Resume } from "./Resume";
import classes from "../styles/classes";

export const EditResume = (props) => {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   return (
      <>
         <div
         // className={classes.Input}
            style={{
               display: "flex",
               flexDirection: "row",
               alignItems: "center",
               width: "fit-content",
            }}
         >
            <Form.Label>Зарплата: </Form.Label>
            <Form.Label style={{marginLeft: "1%"}}>5р</Form.Label>
            <Form.Check
               style={{ marginLeft: "5%", width: "200px"}}
               label="Работа удаленно"
               checked={true}
            />
            <Form.Check
               style={{ marginLeft: "3%" , width: "200px"}}
               label="Актовное резюме"
            />
            <Button
               variant="primary"
               onClick={handleShow}
               style={{ marginLeft: "3%" }}
            >
               Редактировать
            </Button>
         </div>

         <Resume
            title={props.title}
            professions={props.professions}
            show={show}
            onHide={handleClose}
         ></Resume>
      </>
   );
};
