import { NgModule, APP_INITIALIZER, Injector } from "@angular/core";
import { CommonModule } from "@angular/common";
import { createCustomElement } from "@angular/elements";
import { AppTitleComponent } from "./app-title/app-title.component";
import { AppFooterComponent } from "./app-footer/app-footer.component";
import { Iwe7BaseModule } from "iwe7-base";
@NgModule({
  imports: [CommonModule],
  declarations: [AppTitleComponent, AppFooterComponent],
  entryComponents: [AppTitleComponent, AppFooterComponent],
  providers: []
})
export class ElementsModule extends Iwe7BaseModule {
  constructor(injector: Injector) {
    super(injector);
  }
}
