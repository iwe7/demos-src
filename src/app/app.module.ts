import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";

import { APP_BASE_HREF, LocationStrategy } from "@angular/common";
import { RouterModule } from "@angular/router";
import { Iwe7ElementModule } from "iwe7-element";
import { Iwe7CoreModule } from "iwe7-core";
import { Iwe7ShareModule } from "iwe7-share";
import { We7LocationStrategy } from "iwe7-router";
import { Iwe7EditorModule } from "projects/iwe7-editor/src/public_api";
/*
{
      provide: APP_BASE_HREF,
      useValue: "/app/index.php"
    }
,
    {
      provide: LocationStrategy,
      useClass: We7LocationStrategy
    }
    RouterModule.forRoot([
      {
        path: "",
        pathMatch: "full",
        redirectTo: "app/home"
      },
      {
        path: "app/index.php",
        children: [
          {
            path: "",
            loadChildren: "./home/home.module#HomeModule"
          },
          {
            path: "home",
            loadChildren: "./home/home.module#HomeModule"
          },
          {
            path: "index",
            loadChildren: "./home/home.module#HomeModule"
          },
          {
            path: "pc",
            loadChildren: "./pc/pc.module#PcModule"
          },
          {
            path: "mobile",
            loadChildren: "./mobile/mobile.module#MobileModule"
          },
          {
            path: "wechat",
            loadChildren: "./wechat/wechat.module#WechatModule"
          },
          {
            path: "wxapp",
            loadChildren: "./wxapp/wxapp.module#WxappModule"
          },
          {
            path: "iphone",
            loadChildren: "./iphone/iphone.module#IphoneModule"
          },
          {
            path: "android",
            loadChildren: "./android/android.module#AndroidModule"
          }
        ]
      }
    ])
*/
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Iwe7EditorModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
