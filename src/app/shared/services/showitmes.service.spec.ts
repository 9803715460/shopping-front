/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShowitmesService } from './showitmes.service';

describe('Service: Showitmes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowitmesService]
    });
  });

  it('should ...', inject([ShowitmesService], (service: ShowitmesService) => {
    expect(service).toBeTruthy();
  }));
});