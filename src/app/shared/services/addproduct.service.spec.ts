/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddproductService } from './addproduct.service';

describe('Service: Addproduct', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddproductService]
    });
  });

  it('should ...', inject([AddproductService], (service: AddproductService) => {
    expect(service).toBeTruthy();
  }));
});