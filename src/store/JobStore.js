import { makeAutoObservable } from "mobx";

export class JobStore {
   constructor(companyName, icon, job, mainImage, info, money) {
      this._companyName = companyName;
      this._icon = icon;
      this._job = job;
      this._mainImage = mainImage;
      this._info = info;
      this._money = money;
      makeAutoObservable(this);
   }

   setMoney(money) {
      this._money = money;
   }

   get money() {
      return this._money;
   }

   setName(mainImage) {
      this._mainImage = mainImage;
   }

   get mainImage() {
      return this._mainImage;
   }

   setNameCompanyName(companyName) {
      this._companyName = companyName;
   }

   get companyName() {
      return this._companyName;
   }

   setIcon(icon) {
      this._icon = icon;
   }

   get icon() {
      return this._icon;
   }

   setInfo(info) {
      this._info = info;
   }

   get info() {
      return this._info;
   }

   setJob(job) {
      this._job = job;
   }

   get job() {
      return this._job;
   }
}
