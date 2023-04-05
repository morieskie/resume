import { TestBed } from '@angular/core/testing';

import { PortfolioService } from './portfolio.service';
import {  HttpClientModule } from '@angular/common/http';

describe('PortfolioService', () => {
  let service: PortfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers: [PortfolioService]
    })
      .compileComponents();
    service = TestBed.inject(PortfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
