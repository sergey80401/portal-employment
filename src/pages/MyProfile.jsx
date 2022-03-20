import React, { useContext, useState } from "react";
import { Form, FloatingLabel, Image, Button } from "react-bootstrap";
import userHolder from "../assets/userHolder.png";
import { backgroundGradient } from "../feautures/backgroundGradient.module.css";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import classes from "../styles/classes";
import { ChangePassword } from "../components/ChangePassword";

const MyProfile = observer(() => {
   const [disabled, setDisabled] = useState(true);
   const { user } = useContext(Context);

   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   return (
      <div
         style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            padding: "1%",
         }}
         className={backgroundGradient}
      >
         <div
            style={{
               display: "flex",
               justifyContent: "start",
               padding: "1%",
            }}
         >
            <div
               className={classes.Input}
               style={{
                  display: "flex",
                  alignItems: "center",
                  height: "fit-content",
               }}
            >
               <Image height={128} width={128} src={userHolder} />
               <div
                  style={{
                     display: "flex",
                     flexDirection: "column",
                  }}
               >
                  <Form.Control
                     disabled={disabled}
                     placeholder="Фамилия"
                     value={user.lastName}
                     onChange={(event) => {
                        user.lastName = event.target.value;
                     }}
                  />
                  <Form.Control
                     disabled={disabled}
                     style={{ marginTop: "3%" }}
                     placeholder="Имя"
                     value={user.name}
                     onChange={(event) => {
                        user.name = event.target.value;
                     }}
                  />
                  <Form.Control
                     disabled={disabled}
                     style={{ marginTop: "3%" }}
                     placeholder="Отчесвто"
                     value={user.patronymic}
                     onChange={(event) => {
                        user.patronymic = event.target.value;
                     }}
                  />
                  {disabled ? (
                     <Button
                        onClick={() => setDisabled(!disabled)}
                        style={{ marginTop: "5%" }}
                        variant="primary"
                     >
                        Редактировать
                     </Button>
                  ) : (
                     <Button
                        onClick={() => setDisabled(!disabled)}
                        style={{ marginTop: "5%" }}
                        variant="success"
                     >
                        Сохранить
                     </Button>
                  )}
                  <Button
                     onClick={handleShow}
                     style={{ marginTop: "5%" }}
                     variant="success"
                  >
                     Изменить пароль
                  </Button>
               </div>
            </div>
            <div
               style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "30%",
                  marginLeft: "5%",
               }}
            >
               <FloatingLabel
                  label="E-mail"
                  style={{ display: "flex", margin: "0% 1% 1% 1%" }}
               >
                  <Form.Control
                     disabled={disabled}
                     placeholder="E-mail"
                     value={user.email}
                     onChange={(event) => {
                        user.email = event.target.value;
                     }}
                  />
               </FloatingLabel>
               <FloatingLabel
                  label="Номер телефона"
                  style={{ display: "flex", margin: "1%" }}
               >
                  <Form.Control
                     disabled={disabled}
                     placeholder="Номер телефона"
                     value={user.phoneNumber}
                     onChange={(event) => {
                        user.phoneNumber = event.target.value;
                     }}
                  />
               </FloatingLabel>
               <FloatingLabel
                  label="ИНН"
                  style={{ display: "flex", margin: "1%" }}
               >
                  <Form.Control
                     disabled={disabled}
                     placeholder="ИНН"
                     value={user.INN}
                     onChange={(event) => {
                        user.INN = event.target.value;
                     }}
                  />
               </FloatingLabel>
               <FloatingLabel
                  label="Дата рождения"
                  style={{ display: "flex", margin: "1%" }}
               >
                  <Form.Control
                     disabled={disabled}
                     placeholder="Дата рождения"
                     value={user.birthDay}
                     onChange={(event) => {
                        user._birthDay = event.target.value;
                     }}
                  />
               </FloatingLabel>
               <FloatingLabel
                  label="Факультет"
                  style={{ display: "flex", margin: "1%" }}
               >
                  <Form.Control
                     disabled={disabled}
                     placeholder="Факультет"
                     value={user.faculty}
                     onChange={(event) => {
                        user.faculty = event.target.value;
                     }}
                  />
               </FloatingLabel>
               <FloatingLabel
                  label="Специальность"
                  style={{ display: "flex", margin: "1%" }}
               >
                  <Form.Control
                     disabled={disabled}
                     placeholder="Специальность"
                     value={user.speciality}
                     onChange={(event) => {
                        user.speciality = event.target.value;
                     }}
                  />
               </FloatingLabel>
               <FloatingLabel
                  label="Год выпуска"
                  style={{ display: "flex", margin: "1%" }}
               >
                  <Form.Control
                     disabled={disabled}
                     placeholder="Год выпуска"
                     value={user.releaseDate}
                     onChange={(event) => {
                        user.releaseDate = event.target.value;
                     }}
                  />
               </FloatingLabel>
               <FloatingLabel
                  label="Место трудоустройства"
                  style={{ display: "flex", margin: "1%" }}
               >
                  <Form.Control
                     disabled={disabled}
                     placeholder="Место трудоустройства"
                     value={user.workingPlace}
                     onChange={(event) => {
                        user.workingPlace = event.target.value;
                     }}
                  />
               </FloatingLabel>
            </div>
         </div>
         <ChangePassword show={show} onHide={handleClose}></ChangePassword>
      </div>
   );
});

export default MyProfile;
