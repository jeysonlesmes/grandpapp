import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailActivityPage } from './detail-activity.page';

describe('DetailActivityPage', () => {
  let component: DetailActivityPage;
  let fixture: ComponentFixture<DetailActivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailActivityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
