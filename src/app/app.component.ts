import { Component, HostBinding, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { SettingsService, TitleService } from "@delon/theme";
import { filter } from "rxjs/operators";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
