import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteAccComponent } from './dialog-delete-acc.component';

describe('DialogDeleteAccComponent', () => {
  let component: DialogDeleteAccComponent;
  let fixture: ComponentFixture<DialogDeleteAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteAccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeleteAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
