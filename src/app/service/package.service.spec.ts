/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PackageService } from './package.service';

describe('Service: Package', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PackageService]
    });
  });

  it('should ...', inject([PackageService], (service: PackageService) => {
    expect(service).toBeTruthy();
  }));
});
