import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisagePage } from './visage.page';

describe('VisagePage', () => {
  let component: VisagePage;
  let fixture: ComponentFixture<VisagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
