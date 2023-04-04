import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingPageComponent} from "./landing-page.component";
import {SharedModule} from "../../shared/shared.module";
import {AboutModule} from "../about/about.module";
import {ResumeModule} from "../resume/resume.module";
import {ContactModule} from "../contact/contact.module";
import {LandingPageRoutingModule} from "./landing-page-routing.module";
import {PortfolioModule} from "../portfolio/portfolio.module";



@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AboutModule,
    ResumeModule,
    PortfolioModule,
    ContactModule,
    LandingPageRoutingModule,
  ],
  exports: [
    LandingPageComponent
  ]
})
export class LandingPageModule {

  constructor() {
  }
}
