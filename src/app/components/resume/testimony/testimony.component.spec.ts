import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonyComponent } from './testimony.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('TestimonyComponent', () => {
  let component: TestimonyComponent;
  let fixture: ComponentFixture<TestimonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonyComponent ],
      imports: [SharedModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
