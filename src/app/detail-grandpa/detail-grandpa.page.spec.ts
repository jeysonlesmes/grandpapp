import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGrandpaPage } from './detail-grandpa.page';

describe('DetailGrandpaPage', () => {
  let component: DetailGrandpaPage;
  let fixture: ComponentFixture<DetailGrandpaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailGrandpaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailGrandpaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
