import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostAnalysisComponent } from './lost-analysis.component';

describe('LostAnalysisComponent', () => {
  let component: LostAnalysisComponent;
  let fixture: ComponentFixture<LostAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
