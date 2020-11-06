/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ServersDataComponent } from './servers-data.component';

describe('ServersDataComponent', () => {
  let component: ServersDataComponent;
  let fixture: ComponentFixture<ServersDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServersDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
