import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IphoneComponent } from "./iphone.component";

import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: IphoneComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [IphoneComponent]
})
export class IphoneModule {}
