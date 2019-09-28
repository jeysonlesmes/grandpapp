import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityInscribePage } from './activity-inscribe.page';

describe('ActivityInscribePage', () => {
  let component: ActivityInscribePage;
  let fixture: ComponentFixture<ActivityInscribePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityInscribePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityInscribePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
