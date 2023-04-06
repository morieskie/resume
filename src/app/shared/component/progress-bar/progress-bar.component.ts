import {Component, Input, OnInit} from '@angular/core';
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  animations: [
    trigger('progress', [
      transition('off => on', [
        query('.bar', [
          style({minWidth: '0',width: '0'}),
          stagger(1000, [
            animate('1500ms 1s', style({width: '*'}))
          ])
        ], {optional: true}),
      ])
    ])
  ]
})
export class ProgressBarComponent implements OnInit {
  @Input() percentage = 0;
  @Input() color: string | undefined;
  @Input() className: string | undefined;

  state = 'off';

  ngOnInit(): void {
    setTimeout(
      () => {
        this.state = 'on'
      }
    )
  }
}
