import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WechatRoutingModule } from './wechat-routing.module';
import { WechatComponent } from './wechat.component';

@NgModule({
  imports: [
    CommonModule,
    WechatRoutingModule
  ],
  declarations: [WechatComponent]
})
export class WechatModule { }
