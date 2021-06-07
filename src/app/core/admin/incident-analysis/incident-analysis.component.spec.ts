import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentAnalysisComponent } from './incident-analysis.component';

describe('IncidentAnalysisComponent', () => {
  let component: IncidentAnalysisComponent;
  let fixture: ComponentFixture<IncidentAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
