import { TestBed } from '@angular/core/testing';

import { MeService } from './me.service';
import {  HttpClientModule } from '@angular/common/http';

describe('MeService', () => {
  let service: MeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers: [ MeService]
    })
      .compileComponents();
    service = TestBed.inject(MeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
