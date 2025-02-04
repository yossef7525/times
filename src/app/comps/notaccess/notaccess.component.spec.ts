import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaccessComponent } from './notaccess.component';

describe('NotaccessComponent', () => {
  let component: NotaccessComponent;
  let fixture: ComponentFixture<NotaccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotaccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
