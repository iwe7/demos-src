import { NgModule, APP_INITIALIZER, Injector } from "@angular/core";
import { CommonModule } from "@angular/common";
import { createCustomElement } from "@angular/elements";
import { AppTitleComponent } from "./app-title/app-title.component";
import { NgElementDirective } from "./ng-element.directive";
import { AppFooterComponent } from "./app-footer/app-footer.component";

@NgModule({
  imports: [CommonModule],
  declarations: [AppTitleComponent, NgElementDirective, AppFooterComponent],
  exports: [NgElementDirective],
  entryComponents: [AppTitleComponent, AppFooterComponent],
  providers: []
})
export class ElementsModule {}
