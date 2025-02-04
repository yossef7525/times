import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIdComponent } from './admin-id.component';

describe('AdminIdComponent', () => {
  let component: AdminIdComponent;
  let fixture: ComponentFixture<AdminIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
