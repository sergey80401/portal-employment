import React, { useState } from "react";
import { Form, FloatingLabel } from "react-bootstrap";
import classes from "../styles/classes";

export const PortFolioItem = (props) => {
   return (
      <div className={classes.Input} style={{padding: "3%"}}>
         <Form.Group>
            <FloatingLabel style={{marginBottom: "5%"}}controlId="floatingInput" label="Название">
               <Form.Control placeholder="Название" />
            </FloatingLabel>
            <Form.Control type="file" size="lg"></Form.Control>
         </Form.Group>
      </div>
   );
};
