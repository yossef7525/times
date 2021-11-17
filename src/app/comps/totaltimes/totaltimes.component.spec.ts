import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotaltimesComponent } from './totaltimes.component';

describe('TotaltimesComponent', () => {
  let component: TotaltimesComponent;
  let fixture: ComponentFixture<TotaltimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotaltimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotaltimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
