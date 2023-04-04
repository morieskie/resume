import {Component, ComponentRef, ViewChild, ViewContainerRef} from '@angular/core';
import {SlotDirective} from "../../shared/directive/slot.directive";
import {PortfolioItemComponent} from "./portfolio-item/portfolio-item.component";
import {Project} from "../../shared/model/Project";
import {PortfolioService} from "../../shared/service/portfolio.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  @ViewChild(SlotDirective, {static: true}) appSlot!: SlotDirective

  show = false;
  content = ''

  portfolios: Project[] | undefined;

  popup: ComponentRef<PortfolioItemComponent> | undefined;

  constructor(private portfolioService: PortfolioService) {
  }

  ngOnInit() {
    this.portfolioService.get().subscribe(response => this.portfolios = response)
  }

  onShowPopup(portfolio: Project) {
    this.appSlot.viewContainerRef.clear();
    this.popup = this.appSlot.viewContainerRef.createComponent<PortfolioItemComponent>(PortfolioItemComponent);
    this.popup.instance.item = portfolio
    this.popup.instance
    this.show = true;
  }

  onHidePopup() {
    this.popup?.destroy()
    this.appSlot.viewContainerRef.clear();
    this.show = false;
  }


}
