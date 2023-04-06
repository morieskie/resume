import {Component, OnDestroy, OnInit} from '@angular/core';
import {animate, group, query, stagger, style, transition, trigger} from "@angular/animations";
import {TestimonyService} from "../../shared/service/testimony.service";
import {Testimony} from "../../shared/model/Testimony";
import {Experience} from "../../shared/model/Experience";
import {Education} from "../../shared/model/Education";
import {EducationService} from "../../shared/service/education.service";
import {ExperienceService} from "../../shared/service/experience.service";
import {Tab} from "../../shared/enum/tab";
import {Technology} from "../../shared/model/Technology";
import {TechnologyService} from "../../shared/service/technology.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  animations: [
    trigger('tabsManu', [
      transition(':enter', [
        query('[data-animation-effect="fadeInDown"]', [
          style({transform: 'translateY(-50%)', visibility: 'hidden', opacity: 0}),
          animate('.2s ease-in', style({transform: 'translateY(0)', visibility: 'visible', opacity: 1}))
        ], {optional: true})
      ])
    ]),
    trigger('state', [
      transition(':enter', [
        style({
          height: 0,
          visibility: 'hidden'
        }),
        group([
          animate(1000, style({
            height: '*',
            visibility: 'visible'
          })),
          query('[data-animation-effect="fadeInUp"]', [
            style({transform: 'translateY(100%)', opacity: 0}),
            stagger(100, [
              animate('.5s 100ms ease-in', style({transform: 'translateY(0)', opacity: 1}))
            ])
          ], {optional: true}),
          query('[data-animation-effect="zoomIn"]', [
            style({transform: 'scale(0)'}),
            stagger(300, [
              animate('.2s 100ms ease-in', style({transform: 'scale(1)'}))
            ])
          ], {optional: true}),
          query('[data-animation-effect="fadeInLeft"],.testimonial_right', [
            style({transform: 'translateX(-150%)', visibility: 'hidden', opacity: 0}),
            stagger(300, [
              animate('1s 100ms ease-in', style({transform: 'translateX(0)', visibility: 'visible', opacity: 1}))
            ])
          ], {optional: true}),
          query('[data-animation-effect="fadeInRight"],.testimonial_left', [
            style({transform: 'translateX(100%)', visibility: 'hidden', opacity: 0}),
            stagger(600, [
              animate('1s 100ms ease-in', style({transform: 'translateX(0)', visibility: 'visible', opacity: 1}))
            ])
          ], {optional: true}),
        ]),
      ]),
    ]),
  ]
})
export class ResumeComponent implements OnInit, OnDestroy {

  state: Tab;
  showTabMenu = 'off';

  education: Education[] | undefined;

  experience: Experience[] | undefined

  technologies: Technology[] | undefined;

  tab: Tab | undefined;

  testimonies: Testimony[] | undefined;

  eduSubRef: Subscription | undefined;
  expSubRef: Subscription | undefined;
  techSubRef: Subscription | undefined;
  testimSubRef: Subscription | undefined;

  constructor(
    private educationService: EducationService,
    private experienceService: ExperienceService,
    private technologyService: TechnologyService,
    private testimonyService: TestimonyService) {
  }

  ngOnInit(): void {
    this.eduSubRef = this.educationService.get().subscribe(response => {
      this.showTabMenu = 'on'
      this.education = response;
      this.tab = 'education';
      this.state = 'education';
    })
    this.expSubRef = this.experienceService.get().subscribe(response => this.experience = response)
    this.techSubRef = this.technologyService.get().subscribe(response => this.technologies = response.map((v) => v))
    this.testimSubRef = this.testimonyService.get().subscribe(response => this.testimonies = response)
  }

  onSelectTab(tab: Tab) {
    this.tab = tab;
    this.state = tab;
  }

  ngOnDestroy(): void {
    this.eduSubRef?.unsubscribe();
    this.testimSubRef?.unsubscribe();
    this.expSubRef?.unsubscribe();
    this.techSubRef?.unsubscribe();
  }

}
