import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomatoPage } from './tomato.page';

describe('TomatoPage', () => {
  let component: TomatoPage;
  let fixture: ComponentFixture<TomatoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomatoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
