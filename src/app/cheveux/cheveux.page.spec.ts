import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheveuxPage } from './cheveux.page';

describe('CheveuxPage', () => {
  let component: CheveuxPage;
  let fixture: ComponentFixture<CheveuxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheveuxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheveuxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
