import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMovieComponent } from './episode.component';

describe('ShowMovieComponent', () => {
  let component: ShowMovieComponent;
  let fixture: ComponentFixture<ShowMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.showComponent(ShowMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
