import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdramaComponent } from './viewdrama.component';

describe('ViewdramaComponent', () => {
  let component: ViewdramaComponent;
  let fixture: ComponentFixture<ViewdramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
