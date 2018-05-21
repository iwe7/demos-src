import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PcComponent } from "./pc.component";
import { LayoutDefaultComponent } from "iwe7-layout";

const routes: Routes = [
  {
    path: "",
    component: LayoutDefaultComponent,
    children: [
      {
        path: "",
        component: PcComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PcRoutingModule {}
