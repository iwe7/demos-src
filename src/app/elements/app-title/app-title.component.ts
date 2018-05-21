import { Component, OnInit, Input, Injector } from "@angular/core";
import { Iwe7BaseComponent } from "iwe7-base";

@Component({
  selector: "app-title",
  templateUrl: "./app-title.component.html",
  styleUrls: ["./app-title.component.scss"]
})
export class AppTitleComponent extends Iwe7BaseComponent implements OnInit {
  title: string = "app title";
  constructor(injector: Injector) {
    super(injector, "app-title");
  }
  ngOnInit() {
    super.ngOnInit();
  }
}
