/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProvidersMainComponent } from './providers-main.component';

describe('ProvidersMainComponent', () => {
  let component: ProvidersMainComponent;
  let fixture: ComponentFixture<ProvidersMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvidersMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidersMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
