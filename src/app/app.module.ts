import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { APP_BASE_HREF } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { ElementsModule } from "./elements/elements.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ElementsModule,
    RouterModule.forRoot(
      [
        {
          path: "",
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
        },
        {
          path: "libs-elements",
          loadChildren: "./elements/elements.module#ElementsModule"
        },
        {
          path: "**",
          component: AppComponent
        }
      ],
      {
        useHash: true
      }
    )
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: "/"
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule {}
