import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentPerkesoComponent } from './incident-perkeso.component';

describe('IncidentPerkesoComponent', () => {
  let component: IncidentPerkesoComponent;
  let fixture: ComponentFixture<IncidentPerkesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentPerkesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentPerkesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
