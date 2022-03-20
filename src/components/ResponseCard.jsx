import { Image } from "react-bootstrap";
import { React, useState } from "react";

import { ResponseModal } from "./ResponseModal";

import logo from "../assets/jobs/job1.png";
import roba from "../assets/CompaniesLogos/gems_logo.png";

export const ResponseCard = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div style={{ display: "inline-block", margin: "5px"}}>     
            <div style={{ backgroundColor: "white", textAlign: "center", display: "inline-grid", borderStyle: "solid", border: "5px solid #dee2e6" }} onClick={handleShow}>
                <Image style={{ borderStyle: "solid", border: "1px solid #dee2e6"}}
                    width={240}
                    height={232}
                    src={props.logo}                    
                />
                <div style={{ justifyContent: "start", textAlign: "center", borderStyle: "solid", border: "1px solid #dee2e6" }}>
                    <Image
                        width={64}
                        height={64}
                        src={props.roba}
                        roundedCircle
                    />
                    <a style={{ marginLeft: "10px", fontWeight: "bold", }}>{props.vacancy}</a>
                </div>
                <div style={{ width: "100%", textAlign: "center", borderStyle: "solid", border: "1px solid #dee2e6" }}>
                    <a>Дата: </a>
                    <a>{props.time}</a>
                    <a> | </a>
                    <a>{props.data}</a>
                </div>
                <div style={{ width: "100%", textAlign: "center", borderStyle: "solid", border: "1px solid #dee2e6" }}>
                    <a>Статус: </a>
                    <a>{props.status}</a>
                </div>
            </div>
            <ResponseModal roba={props.roba} logo={props.logo} zp={props.zp} tryd={props.tryd} exp={props.exp} zan={props.zan} opis={props.opis} vacancy={props.vacancy} onHide={handleClose} show={show}/>
        </div>
    );
};