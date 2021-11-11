import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerpageComponent } from './timerpage.component';

describe('TimerpageComponent', () => {
  let component: TimerpageComponent;
  let fixture: ComponentFixture<TimerpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
