import React, { useContext } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import { VacancyCard } from "../components/VacancyCard";
import classes from "../styles/classes";
import { backgroundGradient } from "../feautures/backgroundGradient.module.css";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

export const JobDirectory = observer(() => {
   const { jobs } = useContext(Context);

   return (
      <div className={backgroundGradient}>
        
         <Container>
         <Form.Label style={{ marginTop: "1%", color: "white", fontSize: "32px"}} size="lg">
               Доска вакансий
            </Form.Label>
            <Row>
               {jobs.map((jobItem) => (
                  <Col key={jobItem} style={{ marginTop: "3%" }} sm={3}>
                     <VacancyCard
                        logo={jobItem.icon}
                        companyName={jobItem.companyName}
                        job={jobItem.job}
                        mainImage={jobItem.mainImage}
                        info={jobItem.info}
                        money={jobItem.money}
                        className={classes.vaCard}
                     ></VacancyCard>
                  </Col>
               ))}
            </Row>
         </Container>
      </div>
   );
});
