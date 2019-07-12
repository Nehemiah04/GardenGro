import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrotPage } from './carrot.page';

describe('CarrotPage', () => {
  let component: CarrotPage;
  let fixture: ComponentFixture<CarrotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrotPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
