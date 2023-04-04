import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PortfolioRoutingModule} from './portfolio-routing.module';
import {PortfolioComponent} from "./portfolio.component";
import {SharedModule} from "../../shared/shared.module";
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    PortfolioComponent,
    PortfolioItemComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule,
    FontAwesomeModule
  ],
  exports: [
    PortfolioComponent
  ]
})
export class PortfolioModule {
}
