import { TestBed } from '@angular/core/testing';

import { ModalService } from './modal.service';
import {  HttpClientModule } from '@angular/common/http';

describe('ModalService', () => {
  let service: ModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[ ModalService]
    })
      .compileComponents();
    service = TestBed.inject(ModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
