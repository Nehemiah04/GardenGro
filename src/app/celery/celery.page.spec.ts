import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeleryPage } from './celery.page';

describe('CeleryPage', () => {
  let component: CeleryPage;
  let fixture: ComponentFixture<CeleryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeleryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeleryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
