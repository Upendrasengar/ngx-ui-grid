import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiGridBaseComponent } from './ui-grid-base.component';

describe('UiGridBaseComponent', () => {
  let component: UiGridBaseComponent;
  let fixture: ComponentFixture<UiGridBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiGridBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiGridBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
