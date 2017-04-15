/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ActorListComponent } from './actor-list.component';

describe('ActorListComponent', () => {
  let component: ActorListComponent;
  let fixture: ComponentFixture<ActorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
