import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrotForecastPage } from './carrot-forecast.page';

describe('CarrotForecastPage', () => {
  let component: CarrotForecastPage;
  let fixture: ComponentFixture<CarrotForecastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrotForecastPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrotForecastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
