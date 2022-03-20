import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UserStore from "./store/UserStore";
import { JobStore } from "./store/JobStore";

// assest importing
import gems_logo from "./assets/CompaniesLogos/gems_logo.png";
import luxoft_logo from "./assets/CompaniesLogos/luxoft_logo.png";
import sBits_logo from "./assets/CompaniesLogos/7bits_logo.png";
import adci_logo from "./assets/CompaniesLogos/adci_logo.png";

import job1 from "./assets/jobs/job1.png";
import job2 from "./assets/jobs/job2.png";
import job3 from "./assets/jobs/job3.png";
import job4 from "./assets/jobs/job4.png";
import job5 from "./assets/jobs/job5.png";
import job6 from "./assets/jobs/job6.png";
import job7 from "./assets/jobs/job7.png";
import job8 from "./assets/jobs/job8.png";

const info1 =
   "C#/.NET разработчик — это программист, который использует технологии платформы .NET от компании Microsoft. Главный инструмент в его работе — надежный и многофункциональный язык программирования C#, который много лет занимает лидирующие места в разных ТОПах. Разработчики данного направления могут разрабатывать широкий спектр продуктов. Так, как рынок труда активно развивается, программисты, хорошо знающие C# и технологии .NET, являются очень востребованными и высокооплачиваемыми.";
   const info2 = "Vue.js – это всего лишь один из JavaScript фреймворков, используемых для создания фронтенд на веб-сайтах. А используем мы фреймворки для того, чтобы сэкономить время разработки. Благодаря им, нам не приходится тратить время на создание таких инфраструктурных вещей как управление роутингом, управление состоянием приложения, придумыванием низкоуровневых абстракций для компонентов, разработкой своей реализации механизма реактивности и многое другое."
   const info3 = "Системный аналитик помогает оптимизировать и автоматизировать работу компании и её подразделений. Этот специалист разбирается в менеджменте, экономике и информационных технологиях — помогает скоординировать процесс разработки ПО так, чтобы результат был максимально продуктивным."
   const info4 = "HR-менеджер — это человек, который управляет персоналом: мотивирует, оценивает и ищет нужных специалистов."
   const info5 = "Тестировщики, или QA-инженеры, — это люди, которые проверяют, как работает программа или приложение. Они ищут ошибки, смотрят, чтобы программа делала именно то, что задумано, защищают продукт от хакеров, проверяют, как приложение работает на разных устройствах и в разных операционных системах."
   const info6 = "Веб-дизайнер — это человек, который работает над внешним видом сайта. Он выбирает, какие элементы будут представлены на странице и в каком порядке они будут отражаться на мониторах пользователей."
   const info7 = "Чтобы называться разработчиком Node.js нужно разбираться в тонкостях асинхронного JS, знать большую часть встроенных функций Node.js, уметь работать с основными модулями и создавать свои."
   const info8 = "React разработчик - это специалист, который умеет верстать веб-страницы, имеет хорошие знания языка программирования JavaScript, знает фреймворк React, а также целый ряд других веб-технологий, которые используются во время создания клиентской стороны веб-сайта."

export const Context = createContext(null);
ReactDOM.render(
   <Context.Provider
      value={{
         user: new UserStore(),
         jobs: [
            new JobStore("Gems", gems_logo, "C# .NET Разработчик", job1, info1, "20000р"),
            new JobStore("Gems", gems_logo, "Vue.js Разработчик", job2, info2, "20000р"),
            new JobStore("Luxoft", luxoft_logo, "IT Аналитк", job3, info1, "20000р"),
            new JobStore("Luxoft", luxoft_logo, "HR", job4, info1, "20000р"),
            new JobStore("Luxoft", luxoft_logo, "Тестировщик", job5, info1, "20000р"),
            new JobStore("7Bits", sBits_logo, "WEB-дизайнер", job6, info1, "20000р"),
            new JobStore( "adci.", adci_logo, "Node.js разработчик", job7, info1, "20000р", ),
            new JobStore("adci.", adci_logo, "React разработчик", job8, info1),
            new JobStore("Gems", gems_logo, "C# .NET Разработчик", job1, info1, "20000р"),
            new JobStore("Gems", gems_logo, "Vue.js Разработчик", job2, info2, "20000р"),
            new JobStore("Luxoft", luxoft_logo, "IT Аналитк", job3, info1, "20000р"),
            new JobStore("Luxoft", luxoft_logo, "HR", job4, info1, "20000р"),
            new JobStore("Luxoft", luxoft_logo, "Тестировщик", job5, info1, "20000р"),
            new JobStore("7Bits", sBits_logo, "WEB-дизайнер", job6, info1, "20000р"),
            new JobStore( "adci.", adci_logo, "Node.js разработчик", job7, info1, "20000р", ),
            new JobStore("adci.", adci_logo, "React разработчик", job8, info1),
            
         ],
      }}
   >
      <App />
   </Context.Provider>,
   document.getElementById("root")
);
