import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsPartnerPage } from './tabs-partner.page';

describe('TabsPartnerPage', () => {
  let component: TabsPartnerPage;
  let fixture: ComponentFixture<TabsPartnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsPartnerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPartnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
