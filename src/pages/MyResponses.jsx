import React from "react"
import { ResponseCard } from "../components/ResponseCard";

import logo_1 from "../assets/jobs/job1.png";
import roba_1 from "../assets/CompaniesLogos/gems_logo.png";
import logo_2 from "../assets/jobs/job2.png";
import roba_2 from "../assets/CompaniesLogos/7bits_logo.png";
import logo_3 from "../assets/jobs/job3.png";
import roba_3 from "../assets/CompaniesLogos/adci_logo.png";
import logo_4 from "../assets/jobs/job4.png";
import roba_4 from "../assets/CompaniesLogos/luxoft_logo.png";
import logo_5 from "../assets/jobs/job5.png";
import roba_5 from "../assets/CompaniesLogos/gems_logo.png";
import logo_6 from "../assets/jobs/job6.png";
import roba_6 from "../assets/CompaniesLogos/7bits_logo.png";
import logo_7 from "../assets/jobs/job7.png";
import roba_7 from "../assets/CompaniesLogos/adci_logo.png";
import logo_8 from "../assets/jobs/job8.png";
import roba_8 from "../assets/CompaniesLogos/luxoft_logo.png";

import { Form } from "react-bootstrap";
import { backgroundGradient } from "../feautures/backgroundGradient.module.css";

var props = [
    { logo: logo_1, roba: roba_1, vacancy: "C# .NET Разработчик", time: "11:10", data: "12.12.2021", status: "Ожидайте", zp: "60 000р", tryd: "Официальное трудоустройтсво", exp: "5 лет", zan: "Полная", opis: "Предлагаем вам удобный график, льготы и прочее" },
    { logo: logo_2, roba: roba_2, vacancy: "IT Аналитк", time: "12:40", data: "16.12.2021", status: "Ожидайте", zp: "60 000р", tryd: "Официальное трудоустройтсво", exp: "5 лет", zan: "Полная", opis: "Предлагаем вам удобный график, льготы и прочее" },
    { logo: logo_3, roba: roba_3, vacancy: "Тестировщик", time: "13:20", data: "10.12.2021", status: "Ожидайте", zp: "60 000р", tryd: "Официальное трудоустройтсво", exp: "5 лет", zan: "Полная", opis: "Предлагаем вам удобный график, льготы и прочее" },
    { logo: logo_4, roba: roba_4, vacancy: "Node.js разработчик", time: "14:25", data: "13.12.2021", status: "Ожидайте", zp: "60 000р", tryd: "Официальное трудоустройтсво", exp: "5 лет", zan: "Полная", opis: "Предлагаем вам удобный график, льготы и прочее" },
    { logo: logo_5, roba: roba_5, vacancy: "Vue.js Разработчик", time: "15:45", data: "20.12.2021", status: "Ожидайте", zp: "60 000р", tryd: "Официальное трудоустройтсво", exp: "5 лет", zan: "Полная", opis: "Предлагаем вам удобный график, льготы и прочее" },
    { logo: logo_6, roba: roba_6, vacancy: "HR", time: "16:40", data: "11.12.2021", status: "Ожидайте", zp: "60 000р", tryd: "Официальное трудоустройтсво", exp: "5 лет", zan: "Полная", opis: "Предлагаем вам удобный график, льготы и прочее" },
    { logo: logo_7, roba: roba_7, vacancy: "WEB-дизайнер", time: "17:15", data: "21.12.2021", status: "Ожидайте", zp: "60 000р", tryd: "Официальное трудоустройтсво", exp: "5 лет", zan: "Полная", opis: "Предлагаем вам удобный график, льготы и прочее" },
    { logo: logo_8, roba: roba_8, vacancy: "React разработчик", time: "18:00", data: "19.12.2021", status: "Ожидайте", zp: "60 000р", tryd: "Официальное трудоустройтсво", exp: "5 лет", zan: "Полная", opis: "Предлагаем вам удобный график, льготы и прочее" },
]

export const MyResponses = () => {
    return (
        <div className={backgroundGradient} style={{ height: "880px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", paddingLeft: "300px", paddingRight: "0px" }}>
                <Form.Label style={{ marginLeft: "1%", marginTop: "1%", color: "white", fontSize: "32px" }} size="lg">
                    Отклики
                </Form.Label>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", paddingLeft: "300px", paddingRight: "100px" }}>
                {props.map((item) => (<ResponseCard
                    logo={item.logo}
                    roba={item.roba}
                    vacancy={item.vacancy}
                    time={item.time}
                    data={item.data}
                    status={item.status}
                    zp={item.zp}
                    tryd={item.tryd}
                    exp={item.exp}
                    zan={item.zan}
                    opis={item.opis}
                //style = {{transform: "scale(0.1)"}}
                ></ResponseCard>))}

            </div>
        </div>
    )
}