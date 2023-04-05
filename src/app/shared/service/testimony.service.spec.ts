import { TestBed } from '@angular/core/testing';

import { TestimonyService } from './testimony.service';
import {  HttpClientModule } from '@angular/common/http';

describe('TestimonyService', () => {
  let service: TestimonyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers: [ TestimonyService ]
    })
      .compileComponents();
    service = TestBed.inject(TestimonyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
