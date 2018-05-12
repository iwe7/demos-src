import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WxappComponent } from "./wxapp.component";

const routes: Routes = [
  {
    path: "",
    component: WxappComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WxappRoutingModule {}
