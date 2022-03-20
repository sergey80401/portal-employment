import {
   JOB_DIRECTORY,
   MY_RESUME,
   MY_PROFILE,
   MY_PORTFOLIO,
   MY_RESPONSES,
   MY_INTERVIEWS,
   EMPLOYER_CASES,
   HOME,
} from "./utils/consts";
import { JobDirectory } from "./pages/JobDirectory";
import { MyResume } from "./pages/MyResume";
import  MyProfile  from "./pages/MyProfile";
import { MyPortfolio } from "./pages/MyPortfolio";
import { MyResponses } from "./pages/MyResponses";
import { MyInterviews } from "./pages/MyInterviews";
import { EmployerCases } from "./pages/EmployerCases";
import { Home } from "./pages/Home";

export const authRoutes = [
   {
      path: JOB_DIRECTORY,
      Component: JobDirectory,
   },
   {
      path: MY_RESUME,
      Component: MyResume,
   },
   {
      path: MY_PROFILE,
      Component: MyProfile,
   },
   {
      path: MY_PORTFOLIO,
      Component: MyPortfolio,
   },
   {
      path: MY_RESPONSES,
      Component: MyResponses,
   },
   {
      path: MY_INTERVIEWS,
      Component: MyInterviews,
   },
   {
      path: EMPLOYER_CASES,
      Component: EmployerCases,
   },
];

export const publicRoutes = [
   {
      path: JOB_DIRECTORY,
      Component: JobDirectory,
   },
];
