import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArrivalsPageComponent } from './new-arrivals-page.component';

describe('NewArrivalsPageComponent', () => {
  let component: NewArrivalsPageComponent;
  let fixture: ComponentFixture<NewArrivalsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewArrivalsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewArrivalsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
