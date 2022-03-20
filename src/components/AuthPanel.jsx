import React, { useContext } from "react";
import { Image, Button, Offcanvas, Form } from "react-bootstrap";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import classes from "../styles/classes";

// assest importing
import logo from "../assets/logo.png";

export const AuthPanel = observer((props) => {
   const { user } = useContext(Context);

   return (
      <Offcanvas show={props.show} onHide={props.onHide} placement={"end"}>
         <Offcanvas.Header style={{ justifyContent: "space-evenly" }}>
            <Image src={logo} roundedCircle height={64} width={64} />
            <Offcanvas.Title>SibADI Employment</Offcanvas.Title>
         </Offcanvas.Header>
         <Offcanvas.Body>
            <div>
               <Form className={classes.regPanel}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Электронная почта</Form.Label>
                     <Form.Control
                        type="email"
                        placeholder="Введите email"
                        onChange={(event) => user.setEmail(event.target.value)}
                     />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Label
                        style={{
                           display: "flex",
                           justifyContent: "space-between",
                        }}
                     >
                        Пароль
                     </Form.Label>
                     <Form.Control
                        type="password"
                        placeholder="Введите пароль"
                        value={user.password}
                        onChange={(event) =>
                           user.setPassword(event.target.value)
                        }
                     />
                  </Form.Group>
                  <Form.Group
                     className="mb-3"
                     controlId="formBasicCheckbox"
                     style={{
                        display: "flex",
                        justifyContent: "space-between",
                     }}
                  >
                     <Form.Check type="checkbox" label="Запомнить меня" />
                     <a href="#test">Забыли пароль?</a>
                  </Form.Group>
                  <div className={classes.RegistrationPanelButtons}>
                     <Button
                        variant="success"
                        type="submit"
                        onClick={() => {
                           user.setIsAuth(true);
                           props.onHide();
                        }}
                     >
                        Авторизоваться
                     </Button>
                  </div>
               </Form>
            </div>
         </Offcanvas.Body>
      </Offcanvas>
   );
});
