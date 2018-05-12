import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { WxappRoutingModule } from "./wxapp-routing.module";
import { WxappComponent } from "./wxapp.component";

@NgModule({
  imports: [CommonModule, WxappRoutingModule],
  declarations: [WxappComponent]
})
export class WxappModule {}
