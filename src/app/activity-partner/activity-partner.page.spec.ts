import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityPartnerPage } from './activity-partner.page';

describe('ActivityPartnerPage', () => {
  let component: ActivityPartnerPage;
  let fixture: ComponentFixture<ActivityPartnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityPartnerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityPartnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
