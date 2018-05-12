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
      router: "/pc"
    },
    {
      title: "手机端",
      router: "/mobile"
    },
    {
      title: "微信端",
      router: "/wechat"
    },
    {
      title: "小程序",
      router: "/wxapp"
    },
    {
      title: "苹果端",
      router: "/iphone"
    },
    {
      title: "安卓端",
      router: "/android"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
