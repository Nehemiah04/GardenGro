import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomatoForecastPage } from './tomato-forecast.page';

describe('TomatoForecastPage', () => {
  let component: TomatoForecastPage;
  let fixture: ComponentFixture<TomatoForecastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomatoForecastPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomatoForecastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
