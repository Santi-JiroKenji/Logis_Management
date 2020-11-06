/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PackagesDataComponent } from './packages-data.component';

describe('PackagesDataComponent', () => {
  let component: PackagesDataComponent;
  let fixture: ComponentFixture<PackagesDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagesDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
