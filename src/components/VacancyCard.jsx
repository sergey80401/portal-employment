import { React, useState } from "react";
import { Card, Button, Image, Form } from "react-bootstrap";
import logo from "../assets/logo.png";
import classes from "../styles/classes";
import { Vacancy } from "./Vacancy";

export const VacancyCard = (props) => {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   return (
      <>
         <Card className={classes.vaCard} onClick={handleShow}>
            <Card.Img
               variant="top"
               src={props.mainImage}
               height={300}
               width={300}
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
                  <Image
                     src={props.logo}
                     roundedCircle
                     height={32}
                     width={32}
                  />
                  <Form.Label className="mt-2" style={{ marginLeft: "3%" }}>
                     {props.companyName}
                  </Form.Label>
               </div>

               <Card.Title>{props.job}</Card.Title>
               <Card.Text>{props.info.substring(0, 25) + "..."}</Card.Text>
               <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button style={{ width: "100%" }} variant="success">
                     Откликнуться
                  </Button>
               </div>
            </Card.Body>
         </Card>

         <Vacancy title={props.job} mainImage={props.mainImage} text={props.info} logo={props.logo} money={props.money} show={show} onHide={handleClose}></Vacancy>
      </>
   );
};
