import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostInvestigationComponent } from './lost-investigation.component';

describe('LostInvestigationComponent', () => {
  let component: LostInvestigationComponent;
  let fixture: ComponentFixture<LostInvestigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostInvestigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostInvestigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
