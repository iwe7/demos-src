import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MobileRoutingModule } from "./mobile-routing.module";
import { MobileComponent } from "./mobile.component";

@NgModule({
  imports: [CommonModule, MobileRoutingModule],
  declarations: [MobileComponent]
})
export class MobileModule {}
