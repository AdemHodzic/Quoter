import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromSuccessComponent } from './from-success.component';

describe('FromSuccessComponent', () => {
  let component: FromSuccessComponent;
  let fixture: ComponentFixture<FromSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
