import { TestBed } from '@angular/core/testing';

import { PlanDeEvacuacionService } from './plan-de-evacuacion.service';

describe('PlanDeEvacuacionService', () => {
  let service: PlanDeEvacuacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanDeEvacuacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
