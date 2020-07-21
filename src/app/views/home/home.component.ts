import { HeaderService } from "./../../components/template/header/header.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private headerSerivce: HeaderService) {
    headerSerivce.headerData = {
      title: "Início",
      icon: "Home",
      routeUrl: "",
    };

  }

  ngOnInit(): void {}
}
