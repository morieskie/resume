import { TestBed } from '@angular/core/testing';

import { TechnologyService } from './technology.service';
import {  HttpClientModule } from '@angular/common/http';

describe('TechnologyService', () => {
  let service: TechnologyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers: [TechnologyService]
    })
      .compileComponents();
    service = TestBed.inject(TechnologyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
