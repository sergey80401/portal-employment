import React, { useState, useContext } from "react";
import {
   Navbar,
   Container,
   Nav,
   Image,
   Form,
   FormControl,
   Button,
} from "react-bootstrap";
import { UserPanel } from "./UserPanel";
import { AuthPanel } from "./AuthPanel";

import { HOME, JOB_DIRECTORY, MY_PROFILE } from "../utils/consts";

// assest importing
import logo from "../assets/logo.png";
import menu from "../assets/menu.png";

import { Context } from "../index";
import { observer } from "mobx-react-lite";

export const NavigationBar = observer(() => {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const { user } = useContext(Context);

   return (
      <Navbar bg="dark" variant="dark">
         <Container>
            <Navbar.Brand href={HOME} style={{ marginLeft: "1%" }}>
               <Image src={logo} roundedCircle height={64} width={64} />
               SibADI Employment
            </Navbar.Brand>
            <Nav className="me-auto">
               <Nav.Link href={JOB_DIRECTORY}>Доска вакансий</Nav.Link>
            </Nav>
            <Form className="d-flex">
               <FormControl
                  type="search"
                  placeholder="Поиск вакансии"
                  className="me-2"
                  aria-label="Search"
               />
               <Button variant="outline-success">Search</Button>
            </Form>
            <Image
               onClick={handleShow}
               src={menu}
               roundedCircle
               style={{ marginLeft: "1%", cursor: "pointer" }}
               height={64}
               width={64}
            />
         </Container>
         {user.isAuth ? (
            <UserPanel show={show} onHide={handleClose}></UserPanel>
         ) : (
            <AuthPanel show={show} onShow={handleShow} onHide={handleClose}></AuthPanel>
         )}
      </Navbar>
   );
});
