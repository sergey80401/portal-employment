import React, { useState, useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Row, Col, Container, Form } from "react-bootstrap";
import { backgroundGradient } from "../feautures/backgroundGradient.module.css";
import classes from "../styles/classes";
import { Context } from "../index";
import { Interview } from "../components/Interview";

export const MyInterviews = () => {
   const { jobs } = useContext(Context);
   const [value, onChange] = useState(new Date());

   return (
      <div
         className={backgroundGradient}
         style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evently",
            height: "auto",
         }}
      >
         <div style={{padding: "3%", marginLeft: "5%"}}>
            <Calendar onChange={onChange} value={value} />
         </div>
         <Container style={{ marginRight: "1%" }}>
            <Row>
               {jobs.map((jobItem) => (
                  <Col key={jobItem} style={{ marginTop: "3%" }} sm={2}>
                     <Interview
                        logo={jobItem.icon}
                        companyName={jobItem.companyName}
                        job={jobItem.job}
                        mainImage={jobItem.mainImage}
                        info={jobItem.info}
                        money={jobItem.money}
                        className={classes.vaCard}
                     ></Interview>
                  </Col>
               ))}
            </Row>
         </Container>
      </div>
   );
};
