import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotatoPage } from './potato.page';

describe('PotatoPage', () => {
  let component: PotatoPage;
  let fixture: ComponentFixture<PotatoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotatoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
