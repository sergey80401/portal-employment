import { makeAutoObservable } from "mobx";

export default class UserStore {
   constructor() {
      this.isAuth = true;
      this.email = "sergey80401@gmail.com";
      this.lastName = "Иванов";
      this.name = "Иван";
      this.patronymic = "Иванович";
      this.password = "";
      this.phoneNumber = "88005553535";
      this.INN = "45367289";
      this.birthDay = "08/04/2001";
      this.faculty = "ИСУ";
      this.speciality = "Прикладная информатика";
      this.releaseDate = "2023";
      this.workingPlace = "---";
      makeAutoObservable(this);
   }

   setIsAuth(isAuth) {
      this.isAuth = isAuth;
   }

   setEmai(email){
      this.email = email;
   }
}
