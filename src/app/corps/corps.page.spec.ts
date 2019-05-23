import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpsPage } from './corps.page';

describe('CorpsPage', () => {
  let component: CorpsPage;
  let fixture: ComponentFixture<CorpsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorpsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
