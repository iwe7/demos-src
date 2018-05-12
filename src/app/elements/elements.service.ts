import { Injectable } from "@angular/core";
import { GlobalService } from "./global";

@Injectable({
  providedIn: 'root'
})
export class ElementsService {
  constructor(private global: GlobalService) {}
}
