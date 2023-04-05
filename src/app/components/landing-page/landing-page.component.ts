import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {SlotDirective} from "../../shared/directive/slot.directive";
import {AboutComponent} from "../about/about.component";
import {ResumeComponent} from "../resume/resume.component";
import {ContactComponent} from "../contact/contact.component";
import {ModalService} from "../../shared/service/modal.service";
import {ExperienceService} from "../../shared/service/experience.service";
import {map} from "rxjs";
import {PortfolioComponent} from "../portfolio/portfolio.component";
import {Me} from "../../shared/model/me";
import {MeService} from "../../shared/service/me.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    trigger('caption', [
      state('enter', style({
        marginTop: '-3rem',
        opacity: 0.75
      })),
      transition('* => enter', [
        animate('1000ms ease-in', style({
            marginTop: '0px'
          })
        ),
        animate('1000ms', style({
            opacity: '1'
          })
        ),
      ]),
    ])
  ]
})
export class LandingPageComponent implements OnInit {

  visible = false;
  components = [
    {
      component: AboutComponent,
      path: 'about'
    },
    {
      component: ResumeComponent,
      path: 'resume'
    },
    {
      component: PortfolioComponent,
      path: 'portfolio'
    },
    {
      component: ContactComponent,
      path: 'contact'
    },
  ];

  data: Me | undefined;


  roles!: string[];

  active = 0;

  state: string = 'enter';

  @ViewChild(SlotDirective, {static: true}) appSlot!: SlotDirective

  constructor(
    private modalService: ModalService,
    private experienceService: ExperienceService,
    private aboutService: MeService
  ) {
  }

  ngOnInit(): void {
    this.experienceService.get().pipe(
      map((experience) => experience.map((v, k) => v.description)))
      .subscribe(response => this.roles = response);
    this.aboutService.get().subscribe(response => this.data = response)
  }

  onChangeState() {
    this.state = (this.state === 'enter') ? 'leave' : 'enter';
  }


  nextItem(event: any, i: number) {
    if (event.toState === 'enter') {
      this.state = 'leave';

      setTimeout(() => {
        if (this.active < this.roles.length - 1) {
          this.active++;
        } else {
          this.active = 0
        }
        this.state = 'enter'
      }, 0)
    }
  }

  onPageSelect(path: string) {

    const page = this.components.find((v, i) => v.path === path);

    this.appSlot.viewContainerRef.clear();
    if (page) {
      const component = this.appSlot.viewContainerRef.createComponent<any>(page.component)
      component.instance.display = 'block';
      this.modalService.activate()
      this.modalService.observe().subscribe((res) => {
        if (!res) {
          component.destroy()
          this.appSlot.viewContainerRef.clear();
        }
      })
    }

  }

  toggle() {
    this.visible = !this.visible;
  }

}