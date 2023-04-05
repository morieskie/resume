import { TestBed } from '@angular/core/testing';

import { ExperienceService } from './experience.service';
import {  HttpClientModule } from '@angular/common/http';

describe('ExperienceService', () => {
  let service: ExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[ ExperienceService]
    })
      .compileComponents();
    service = TestBed.inject(ExperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
