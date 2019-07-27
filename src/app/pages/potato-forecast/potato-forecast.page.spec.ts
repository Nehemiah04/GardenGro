import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotatoForecastPage } from './potato-forecast.page';

describe('PotatoForecastPage', () => {
  let component: PotatoForecastPage;
  let fixture: ComponentFixture<PotatoForecastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotatoForecastPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotatoForecastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
