import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WechatComponent } from "./wechat.component";

const routes: Routes = [
  {
    path: "",
    component: WechatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WechatRoutingModule {}
