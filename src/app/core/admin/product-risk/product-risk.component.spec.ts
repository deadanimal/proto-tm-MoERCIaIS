import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRiskComponent } from './product-risk.component';

describe('ProductRiskComponent', () => {
  let component: ProductRiskComponent;
  let fixture: ComponentFixture<ProductRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
