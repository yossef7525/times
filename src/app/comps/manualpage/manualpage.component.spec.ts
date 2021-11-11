import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualpageComponent } from './manualpage.component';

describe('ManualpageComponent', () => {
  let component: ManualpageComponent;
  let fixture: ComponentFixture<ManualpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
