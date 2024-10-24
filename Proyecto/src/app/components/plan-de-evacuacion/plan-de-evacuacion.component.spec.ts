import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDeEvacuacionComponent } from './plan-de-evacuacion.component';

describe('PlanDeEvacuacionComponent', () => {
  let component: PlanDeEvacuacionComponent;
  let fixture: ComponentFixture<PlanDeEvacuacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanDeEvacuacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanDeEvacuacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
