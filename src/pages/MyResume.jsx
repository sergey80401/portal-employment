import React, { useState } from "react";
import { backgroundGradient } from "../feautures/backgroundGradient.module.css";
import { Form, Button, Accordion } from "react-bootstrap";
import { ResumeAdding } from "../components/ResumeAdding";
import { EditResume } from "../components/EditResume";

const professions = [
   {
      id: 1,
      name: "Backend разработчик",
      description:
         "back-end (оборотная сторона) developer) — это специалист, который занимается программно-административной частью веб-приложения, внутренним содержанием системы, серверными технологиями — базой данных, архитектурой, программной логикой.",
   },
   {
      id: 2,
      name: "Frontend разработчик",
      description:
         "FrontEnd разработчик создает видимую для пользователя часть веб-страницы и его главная задача – точно передать в верстке то, что создал дизайнер, а также реализовать пользовательскую логику.",
   },
   {
      id: 3,
      name: "Аналитик",
      description:
         "Анали́тик — специалист, занимающийся изучением аналитических исследований и обобщений в определенной сфере деятельности, который в совершенстве владеет методами анализа, обычно способен прогнозировать процессы и разрабатывать перспективные программы развития.",
   },
   {
      id: 4,
      name: "WEB дизайнер",
      description:
         "Веб-дизайнер — это человек, который работает над внешним видом сайта. Он выбирает, какие элементы будут представлены на странице и в каком порядке они будут отражаться на мониторах пользователей.",
   },
   {
      id: 5,
      name: "Системный администратор",
      description:
         "Системный администратор — одна из ключевых специальностей в сфере IT. При этом вокруг нее сформировано множество стереотипов. Далеко не всем понятно, кто этот человек, и чем конкретно он занимается в компании. Между тем, без хорошего сисадмина невозможно обеспечить эффективное и надежное функционирование информационной инфраструктуры предприятия. Это тот случай, когда хорошая работа остается внешне незаметной. Поэтому важно рассказать об этой профессии и перспективах развития в ней.",
   },
   {
      id: 6,
      name: "C++ Разработчик",
      description:
         "C++ применяют для создания операционных систем, разнообразных прикладных программ, драйверов устройств, приложений для встраиваемых систем и высокопроизводительных серверов, а также развлекательных приложений (например, игр).",
   },
];

export const MyResume = () => {
   const [showAdding, setShowAdding] = useState(false);

   const handleCloseAdding = () => setShowAdding(false);
   const handleShowAdding = () => setShowAdding(true);

   return (
      <>
         <div
            style={{
               position: "absolute",
               height: "100%",
               width: "100%",
               display: "flex",
               flexDirection: "row",
               justifyContent: "center",
            }}
            className={backgroundGradient}
         >
            <div style={{ width: "65%" }}>
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
                  {professions.map((profession) => (
                     <Accordion.Item
                        key={profession.id}
                        eventKey={profession.id}
                     >
                        <Accordion.Header>{profession.name}</Accordion.Header>
                        <Accordion.Body>
                           <div
                              style={{
                                 display: "flex",
                                 flexDirection: "column",
                              }}
                           >
                              <div
                                 style={{
                                    marginTop: "1%",
                                    display: "flex",
                                    flexDirection: "column",
                                 }}
                              >
                                 <Form.Label>Проффесия: </Form.Label>
                                 <Form.Label>{profession.name}</Form.Label>
                              </div>
                              <div
                                 style={{
                                    marginTop: "1%",
                                    display: "flex",
                                    flexDirection: "column",
                                 }}
                              >
                                 <Form.Label>О себе: </Form.Label>
                                 <Form.Label>Мне нравится лето</Form.Label>
                              </div>
                              <div
                                 style={{
                                    marginTop: "1%",
                                    display: "flex",
                                    flexDirection: "column",
                                 }}
                              >
                                 <Form.Label>Интересы и увлечения: </Form.Label>
                                 <Form.Label>Увлекаюсь ничем</Form.Label>
                              </div>
                              <div
                                 style={{
                                    marginTop: "1%",
                                    display: "flex",
                                    flexDirection: "column",
                                 }}
                              >
                                 <Form.Label>Навыки в отрасли: </Form.Label>
                                 <Form.Label>Нет</Form.Label>
                              </div>
                              <div
                                 style={{
                                    marginTop: "1%",
                                    display: "flex",
                                    flexDirection: "row",
                                 }}
                              >
                                 <EditResume
                                    key={profession.id}
                                    title={profession.name}
                                    professions={professions}
                                 ></EditResume>
                              </div>
                           </div>
                        </Accordion.Body>
                     </Accordion.Item>
                  ))}
               </Accordion>
            </div>
         </div>
         <ResumeAdding
            professions={professions}
            show={showAdding}
            onHide={handleCloseAdding}
         ></ResumeAdding>
      </>
   );
};
