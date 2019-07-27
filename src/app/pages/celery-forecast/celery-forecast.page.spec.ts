import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeleryForecastPage } from './celery-forecast.page';

describe('CeleryForecastPage', () => {
  let component: CeleryForecastPage;
  let fixture: ComponentFixture<CeleryForecastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeleryForecastPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeleryForecastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
