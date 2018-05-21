import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PcRoutingModule } from "./pc-routing.module";
import { PcComponent } from "./pc.component";
import { LayoutModule } from "iwe7-layout";

@NgModule({
  imports: [
    CommonModule,
    PcRoutingModule,
    LayoutModule
  ],
  declarations: [PcComponent]
})
export class PcModule {}
