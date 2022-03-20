import React, { useState } from "react";
import {
   Form,
   Button,
   ToastContainer,
   Toast,
   Accordion,
   Image,
} from "react-bootstrap";
import { PortFolioItem } from "../components/PortfolioItem";
import { backgroundGradient } from "../feautures/backgroundGradient.module.css";
import { PortfolioAdding } from "../components/PortfolioAdding";
import classes from "../styles/classes";
import download from "../assets/download.png";

const portfolios = [
   {
      id: 1,
      name: "Курсовая работа",
      fileName: "1.txt",
   },
   {
      id: 2,
      name: "Диплом",
      fileName: "2.txt",
   },
   {
      id: 3,
      name: "Научная статья",
      fileName: "3.txt",
   },
   {
      id: 4,
      name: "ИТ Диктант 2020",
      fileName: "3.txt",
   },
   {
      id: 5,
      name: "ИТ Диктант 2021",
      fileName: "3.txt",
   },
];

export const MyPortfolio = () => {
   const [showAdding, setShowAdding] = useState(false);

   const handleCloseAdding = () => setShowAdding(false);
   const handleShowAdding = () => setShowAdding(true);

   const [showDel, setShowDel] = useState(false);

   const handleCloseDel = () => setShowDel(false);
   const handleShowDel = () => setShowDel(true);

   return (
      <>
         <div
            className={backgroundGradient}
            style={{
               padding: "5%",
               position: "absolute",
               height: "100%",
               width: "100%",
            }}
         >
            <div
               style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
               }}
            >
               <Form.Label
                  style={{
                     color: "white",
                     fontSize: "32px",
                  }}
               >
                  Мои резюме
               </Form.Label>
               <Button
                  variant="success"
                  style={{
                     marginBottom: "1%",
                     width: "200px",
                     marginTop: "1%",
                  }}
                  onClick={handleShowAdding}
               >
                  Добавить резюме
               </Button>
            </div>
            <Accordion defaultActiveKey="0">
               {portfolios.map((portfolio) => (
                  <Accordion.Item eventKey={portfolio.id}>
                     <Accordion.Header>{portfolio.name}</Accordion.Header>
                     <Accordion.Body>
                        <div
                           className={classes.Input}
                           style={{ display: "flex", flexDirection: "column" }}
                        >
                           <div>
                              <Form.Label
                                 style={{
                                    marginLeft: "1%",
                                    marginBottom: "2%",
                                 }}
                              >
                                 Дата загрузки: 14.05.2020
                              </Form.Label>
                           </div>
                           <div>
                              <Button
                                 style={{ marginLeft: "1%" }}
                                 variant="danger"
                                 onClick={handleShowDel}
                              >
                                 Удалить
                              </Button>
                              <Button
                                 style={{ marginLeft: "1%" }}
                                 variant="primary"
                                 onClick={handleShowAdding}
                              >
                                 Редактировать
                              </Button>
                              <Button
                                 style={{ marginLeft: "1%" }}
                                 variant="success"
                              >
                                 <a href="someFile" download>
                                    <Image
                                       src={download}
                                       height="16px"
                                       width="16px"
                                    />
                                 </a>
                              </Button>
                           </div>
                        </div>
                     </Accordion.Body>
                  </Accordion.Item>
               ))}
            </Accordion>
         </div>

         <PortfolioAdding
            professions={portfolios}
            show={showAdding}
            onHide={handleCloseAdding}
         ></PortfolioAdding>

         <ToastContainer
            style={{ marginTop: "5%" }}
            position="top-end"
            className="p-3"
         >
            <Toast
               onClose={handleCloseDel}
               show={showDel}
               delay={3000}
               autohide
            >
               <Toast.Header>
                  <strong className="me-auto">Портфолио удалено</strong>
               </Toast.Header>
            </Toast>
         </ToastContainer>
      </>
   );
};
