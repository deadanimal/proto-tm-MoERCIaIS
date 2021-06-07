import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRiskComponent } from './project-risk.component';

describe('ProjectRiskComponent', () => {
  let component: ProjectRiskComponent;
  let fixture: ComponentFixture<ProjectRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
