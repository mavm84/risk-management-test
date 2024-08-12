import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskManagementComponent } from './risk-management-list.component';

describe('RiskManagementComponent', () => {
  let component: RiskManagementComponent;
  let fixture: ComponentFixture<RiskManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiskManagementComponent]
    });
    fixture = TestBed.createComponent(RiskManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
