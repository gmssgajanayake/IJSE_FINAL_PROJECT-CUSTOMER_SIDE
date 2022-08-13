import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSignUpComponent } from './customer-sign-up.component';

describe('CustomerSignUpComponent', () => {
  let component: CustomerSignUpComponent;
  let fixture: ComponentFixture<CustomerSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
