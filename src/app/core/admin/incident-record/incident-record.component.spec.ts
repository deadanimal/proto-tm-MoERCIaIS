import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentRecordComponent } from './incident-record.component';

describe('IncidentRecordComponent', () => {
  let component: IncidentRecordComponent;
  let fixture: ComponentFixture<IncidentRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
