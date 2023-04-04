import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgChartsModule } from 'ng2-charts';

import { BackendSkillsComponent } from './backend-skills.component';

describe('BackendSkillsComponent', () => {
  let component: BackendSkillsComponent;
  let fixture: ComponentFixture<BackendSkillsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendSkillsComponent ],
      imports: [ NgChartsModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
