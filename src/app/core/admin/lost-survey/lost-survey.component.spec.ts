import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostSurveyComponent } from './lost-survey.component';

describe('LostSurveyComponent', () => {
  let component: LostSurveyComponent;
  let fixture: ComponentFixture<LostSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
