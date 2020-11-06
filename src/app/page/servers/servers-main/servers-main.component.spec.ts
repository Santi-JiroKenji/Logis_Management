/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ServersMainComponent } from './servers-main.component';

describe('ServersMainComponent', () => {
  let component: ServersMainComponent;
  let fixture: ComponentFixture<ServersMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServersMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
