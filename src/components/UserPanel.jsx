import React, { useState, useContext } from "react";
import {
   Image,
   Button,
   Offcanvas,
   OverlayTrigger,
   Tooltip,
} from "react-bootstrap";

import classes from "../styles/classes";
import { Context } from "../index";

// assest importing
import gear from "../assets/gear.png";
import userHolder from "../assets/userHolder.png";
import resume from "../assets/resume.png";
import portfolio from "../assets/portfolio.png";
import response from "../assets/response.png";
import interviews from "../assets/interviews.png";
import cases from "../assets/cases.png";
import {
   MY_RESUME,
   MY_PROFILE,
   MY_PORTFOLIO,
   MY_RESPONSES,
   MY_INTERVIEWS,
   EMPLOYER_CASES,
} from "../utils/consts";
import { observer } from "mobx-react-lite";
import { ChangePassword } from "./ChangePassword";

export const UserPanel = observer((props) => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const { user } = useContext(Context);

   const userOptions = [
      { icon: userHolder, text: "Профиль", href: MY_PROFILE },
      { icon: resume, text: "Мои резюме", href: MY_RESUME },
      { icon: portfolio, text: "Мое портфолио", href: MY_PORTFOLIO },
      { icon: response, text: "Мои отклики", href: MY_RESPONSES },
      { icon: interviews, text: "Собеседования", href: MY_INTERVIEWS },
      { icon: cases, text: "Кейсы работодателя", href: EMPLOYER_CASES },
   ];

   return (
      <>
         <Offcanvas show={props.show} onHide={props.onHide} placement={"end"}>
            <Offcanvas.Header closeButton>
               <Offcanvas.Title>
                  {user.lastName} {user.name} {user.patronymic}
               </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
               <div className={classes.UserPanel}>
                  <OverlayTrigger
                     placement="right"
                     overlay={
                        <Tooltip>
                           <strong>Сменить аватар</strong>
                        </Tooltip>
                     }
                  >
                     <Image
                        src={userHolder}
                        roundedCircle
                        height={128}
                        width={128}
                        style={{ padding: "5%" }}
                        className={classes.Avatar}
                     />
                  </OverlayTrigger>
                  <div className={classes.userOps}>
                     {userOptions.map((option) => (
                        <Button
                           variant="outline-secondary"
                           className={classes.userOp}
                           size="lg"
                           key={option.text}
                           href={option.href}
                        >
                           <Image src={option.icon} height={32} width={32} />
                           {option.text}
                        </Button>
                     ))}
                     <div className={classes.userBtns}>
                        <Button
                           variant="danger"
                           size="lg"
                           onClick={() => user.setIsAuth(false)}
                        >
                           Sign out
                        </Button>
                        <Image
                           src={gear}
                           roundedCircle
                           className={classes.setBtn}
                           height={38}
                           width={38}
                        />
                     </div>
                  </div>
               </div>
            </Offcanvas.Body>
         </Offcanvas>
         <ChangePassword show={show} onHide={handleClose}></ChangePassword>
      </>
   );
});
