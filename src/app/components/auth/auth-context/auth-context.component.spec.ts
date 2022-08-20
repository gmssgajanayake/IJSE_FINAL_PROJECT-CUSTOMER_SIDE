import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthContextComponent } from './auth-context.component';

describe('AuthContextComponent', () => {
  let component: AuthContextComponent;
  let fixture: ComponentFixture<AuthContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthContextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
