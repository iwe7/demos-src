import { of, Observable, BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
  useFactory: () => {
    return WindowGlobalService;
  }
})
export class GlobalService {
  ElementsLoad: BehaviorSubject<any> = new BehaviorSubject(null);
  ElementsMap: Map<string, any> = new Map();
  time: string = new Date().getTime() + "" + Math.random();
  constructor() {
    console.log(this.time);
  }
}
(<any>window).GlobalService = new GlobalService();

export const WindowGlobalService = (<any>window).GlobalService;
