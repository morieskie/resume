import {Component, OnDestroy, OnInit } from '@angular/core';
import {animate, query, stagger, state, style, transition, trigger} from "@angular/animations";
import {MeService} from "../../shared/service/me.service";
import {Me} from "../../shared/model/me";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeInLeft', [
      state('off', style({
        transform: 'translateX(-100%)',
        visibility: 'hidden'
      })),
      state('on', style({
        transform: 'translateX(0)',
        visibility: 'visible'
      })),
      transition(':enter', [
        style({
          transform: 'translateX(-100%)',
          visibility: 'hidden'
        }),
        animate('350ms cubic-bezier(0.35, 0, 0.25, 1)', style({
          transform: 'translateX(0)',
          visibility: 'visible'
        }))
      ])
    ]),
    trigger('fadeInRight', [
      state('off', style({
        transform: 'translateX(400px)',
        visibility: 'hidden'
      })),
      state('on', style({
        transform: 'translateX(0)',
        visibility: 'visible'
      })),
      transition(':enter', [
        query('[data-animation-effect="fadeInRight"]', [
          style({
            transform: 'translateX(100%)',
            visibility: 'hidden'
          }),
          stagger(200, [
            animate('350ms cubic-bezier(0.35, 0, 0.25, 1)', style({
              transform: 'translateX(0)',
              visibility: 'visible'
            }))
          ])
        ])
      ])
    ]),
    trigger('fadeInUp', [
      state('off', style({
        transform: 'translateY(200%)',
      })),
      state('on', style({
        transform: 'translateY(0)',
      })),
      transition(':enter', [
        style({
          transform: 'translateY(200%)',
        }),
        animate('350ms 800ms ease', style({
          transform: 'translateY(0)',
        }))
      ])
    ])
  ]
})
export class AboutComponent implements OnInit, OnDestroy {

  model: Me | undefined
  fadeInRight = 'off'
  fadeInLeft = 'off'
  fadeInUp = 'off'

  aboutSubRef: Subscription | undefined;

  constructor(private aboutService: MeService) {
  }

  ngOnInit(): void {
    this.fadeInLeft = 'on';
    this.fadeInRight = 'on';
    this.fadeInUp = 'on';
    this.aboutSubRef = this.aboutService.get().subscribe(response => {
      this.model = response;
    });
  }

  ngOnDestroy(): void {
    this.aboutSubRef?.unsubscribe()
  }
}
