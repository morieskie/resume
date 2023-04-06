import {Component, ComponentRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SlotDirective} from "../../shared/directive/slot.directive";
import {PortfolioItemComponent} from "./portfolio-item/portfolio-item.component";
import {Project} from "../../shared/model/Project";
import {PortfolioService} from "../../shared/service/portfolio.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  @ViewChild(SlotDirective, {static: true}) appSlot!: SlotDirective

  show = false;
  content = ''

  portfolios: Project[] | undefined;

  popup: ComponentRef<PortfolioItemComponent> | undefined;

  portfolioSubRef: Subscription | undefined;

  constructor(private portfolioService: PortfolioService) {
  }

  ngOnInit() {
    this.portfolioSubRef = this.portfolioService.get().subscribe(response => this.portfolios = response)
  }

  ngOnDestroy(): void {
    this.portfolioSubRef?.unsubscribe()
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
