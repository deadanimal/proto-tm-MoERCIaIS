import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceAnalysisComponent } from './insurance-analysis.component';

describe('InsuranceAnalysisComponent', () => {
  let component: InsuranceAnalysisComponent;
  let fixture: ComponentFixture<InsuranceAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
