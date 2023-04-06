import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FrontendSkillsComponent} from "./frontend-skills/frontend-skills.component";
import {BackendSkillsComponent} from "./backend-skills/backend-skills.component";
import {DevOpsSkillsComponent} from "./dev-ops-skills/dev-ops-skills.component";
import {TestimonyComponent} from "./testimony/testimony.component";
import {NgChartsModule} from "ng2-charts";
import {ResumeComponent} from "./resume.component";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    ResumeComponent,
    FrontendSkillsComponent,
    BackendSkillsComponent,
    DevOpsSkillsComponent,
    TestimonyComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    SharedModule
  ],
  exports:[
    FrontendSkillsComponent,
    BackendSkillsComponent,
    DevOpsSkillsComponent,
    TestimonyComponent
  ]
})
export class ResumeModule {
}
