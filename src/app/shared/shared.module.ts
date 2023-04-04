import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from "./component/nav/nav.component";
import {SlotDirective} from "./directive/slot.directive";
import {ModalComponent} from "./component/modal/modal.component";
import {ProgressBarComponent} from "./component/progress-bar/progress-bar.component";
import {TimelineComponent} from "./component/timeline/timeline.component";
import {RatingComponent} from "./component/rating/rating.component";
import { PopupComponent } from './component/popup/popup.component';


@NgModule({
  declarations: [
    NavComponent,
    SlotDirective,
    ModalComponent,
    ProgressBarComponent,
    TimelineComponent,
    RatingComponent,
    PopupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent,
    SlotDirective,
    ModalComponent,
    ProgressBarComponent,
    TimelineComponent,
    RatingComponent,
    PopupComponent
  ]
})
export class SharedModule {
}
