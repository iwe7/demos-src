import {
  Component,
  TemplateRef,
  ViewChild,
  ComponentFactory,
  SystemJsNgModuleLoader,
  NgModuleFactoryLoader,
  Injector
} from "@angular/core";
import { WxappComponent } from "./wxapp/wxapp.component";
import { Observable } from "rxjs";
import { GlobalService } from "./elements/global";
import { createCustomElement } from "@angular/elements";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title2: string = "app component title";
  constructor(
    public global: GlobalService,
    private loader: NgModuleFactoryLoader,
    private injector: Injector
  ) {}
  ngOnInit() {
    this.loader.load("./elements/elements.module#ElementsModule").then(res => {
      let a1 = res.create(this.injector);
      let a2: any = a1.componentFactoryResolver;
      let a3 = a2.resolveComponentFactory;
      let a4 = a2._factories;
      a4.forEach(res => {
        let cor = createCustomElement(res.componentType, {
          injector: this.injector
        });
        this.global.ElementsMap.set(res.selector, cor);
        customElements.define(res.selector, cor);
        customElements.whenDefined(res.selector).then(dev => {
          console.log(res.selector);
        });
      });
    });
  }
}
