import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPartnerPage } from './detail-partner.page';

describe('DetailPartnerPage', () => {
  let component: DetailPartnerPage;
  let fixture: ComponentFixture<DetailPartnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPartnerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPartnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
