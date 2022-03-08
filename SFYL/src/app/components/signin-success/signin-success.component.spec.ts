import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninSuccessComponent } from './signin-success.component';

describe('SigninSuccessComponent', () => {
  let component: SigninSuccessComponent;
  let fixture: ComponentFixture<SigninSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
