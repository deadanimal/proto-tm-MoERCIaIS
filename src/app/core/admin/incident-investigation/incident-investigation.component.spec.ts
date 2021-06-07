import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentInvestigationComponent } from './incident-investigation.component';

describe('IncidentInvestigationComponent', () => {
  let component: IncidentInvestigationComponent;
  let fixture: ComponentFixture<IncidentInvestigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentInvestigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentInvestigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
