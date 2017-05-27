import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashmenuComponent } from './dashmenu.component';

describe('DashmenuComponent', () => {
  let component: DashmenuComponent;
  let fixture: ComponentFixture<DashmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
