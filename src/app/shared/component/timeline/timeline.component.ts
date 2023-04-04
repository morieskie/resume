import {Component, Input} from '@angular/core';

interface TimelineItem {
  company: string
  description: string

  from: string
  to: string

}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  @Input() items: TimelineItem[] | undefined
}
