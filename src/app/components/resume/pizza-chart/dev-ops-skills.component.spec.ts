import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgChartsModule } from 'ng2-charts';

import { DevOpsSkillsComponent } from './dev-ops-skills.component';

describe('PhpFrameworksComponent', () => {
  let component: DevOpsSkillsComponent;
  let fixture: ComponentFixture<DevOpsSkillsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DevOpsSkillsComponent ],
      imports: [ NgChartsModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevOpsSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
