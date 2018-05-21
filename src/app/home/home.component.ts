import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  lists = [
    {
      title: "电脑端",
      router: "/app/index.php/pc"
    },
    {
      title: "手机端",
      router: "/app/index.php/mobile"
    },
    {
      title: "微信端",
      router: "/app/index.php/wechat"
    },
    {
      title: "小程序",
      router: "/app/index.php/wxapp"
    },
    {
      title: "苹果端",
      router: "/app/index.php/iphone"
    },
    {
      title: "安卓端",
      router: "/app/index.php/android"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
