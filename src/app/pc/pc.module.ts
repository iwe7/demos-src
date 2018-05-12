import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PcRoutingModule } from "./pc-routing.module";
import { PcComponent } from "./pc.component";

@NgModule({
  imports: [CommonModule, PcRoutingModule],
  declarations: [PcComponent]
})
export class PcModule {}
