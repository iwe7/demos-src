import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AndroidComponent } from "./android.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: AndroidComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [AndroidComponent]
})
export class AndroidModule {}
