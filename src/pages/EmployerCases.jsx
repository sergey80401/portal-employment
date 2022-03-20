import React from "react"
import { Case } from "../components/Case";

import roba_1 from "../assets/CompaniesLogos/gems_logo.png";
import roba_2 from "../assets/CompaniesLogos/7bits_logo.png";
import roba_3 from "../assets/CompaniesLogos/adci_logo.png";
import roba_4 from "../assets/CompaniesLogos/luxoft_logo.png";
import roba_5 from "../assets/CompaniesLogos/gems_logo.png";
import roba_6 from "../assets/CompaniesLogos/7bits_logo.png";
import roba_7 from "../assets/CompaniesLogos/adci_logo.png";
import roba_8 from "../assets/CompaniesLogos/luxoft_logo.png";

import { Form } from "react-bootstrap";
import { backgroundGradient } from "../feautures/backgroundGradient.module.css";

var props = [
    { logo: roba_1, vacancy: "C# .NET Разработчик", comp: "Gems", opis: "Мы предлагаем пройти вам тестирование - это поможет нам проверить ваши занания и навыки!" },
    { logo: roba_2, vacancy: "IT Аналитк", comp: "7Bits", opis: "Мы предлагаем пройти вам тестирование - это поможет нам проверить ваши занания и навыки!" },
    { logo: roba_3, vacancy: "Тестировщик", comp: "ADCI", opis: "Мы предлагаем пройти вам тестирование - это поможет нам проверить ваши занания и навыки!" },
    { logo: roba_4, vacancy: "Node.js разработчик", comp: "Luxoft", opis: "Мы предлагаем пройти вам тестирование - это поможет нам проверить ваши занания и навыки!" },
    { logo: roba_5, vacancy: "Vue.js Разработчик", comp: "Gems", opis: "Мы предлагаем пройти вам тестирование - это поможет нам проверить ваши занания и навыки!" },
    { logo: roba_6, vacancy: "HR", comp: "7Bits", opis: "Мы предлагаем пройти вам тестирование - это поможет нам проверить ваши занания и навыки!" },
    { logo: roba_7, vacancy: "WEB-дизайнер", comp: "ADCI", opis: "Мы предлагаем пройти вам тестирование - это поможет нам проверить ваши занания и навыки!" },
    { logo: roba_8, vacancy: "React разработчик", comp: "Luxoft", opis: "Мы предлагаем пройти вам тестирование - это поможет нам проверить ваши занания и навыки!" },
]

export const EmployerCases = () => {
    return (
        <div className={backgroundGradient}>
            <div style={{ display: "flex", flexDirection: "column", marginLeft: "30%", marginRight: "10%", justifyContent: "center" }}>
                <div><Form.Label style={{ marginTop: "1%", color: "white", fontSize: "32px" }} size="lg"> Кейсы работодателя </Form.Label></div>
                {props.map((item) => <Case logo={item.logo} vacancy={item.vacancy} comp={item.comp} opis={item.opis} />)}
            </div>
        </div>
    )
}