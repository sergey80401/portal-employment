import { React, useState } from "react";
import { Card, Button, Image, Form } from "react-bootstrap";
import logo from "../assets/logo.png";
import classes from "../styles/classes";
import { Vacancy } from "./Vacancy";

export const Interview = (props) => {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   return (
      <>
         <Card className={classes.vaCard} onClick={handleShow}>
            <Card.Img
               style={{borderRadius: "100%"}}
               variant="top"
               src={props.mainImage}
               height={128}
               width={128}
            />
            <Card.Body>
               <div
                  style={{
                     display: "flex",
                     flexDirection: "row",
                     justifyContent: "start",
                     alignItems: "center",
                  }}
               >
                  <Form.Label className="mt-2" style={{ marginLeft: "3%" }}>
                     {props.companyName}
                  </Form.Label>
               </div>
            </Card.Body>
         </Card>

         <Vacancy
            title={props.job}
            mainImage={props.mainImage}
            text={props.info}
            logo={props.logo}
            money={props.money}
            show={show}
            onHide={handleClose}
         ></Vacancy>
      </>
   );
};
