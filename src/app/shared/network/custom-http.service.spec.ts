/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustomHttpService } from './custom-http.service';

describe('CustomHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomHttpService]
    });
  });

  it('should ...', inject([CustomHttpService], (service: CustomHttpService) => {
    expect(service).toBeTruthy();
  }));
});
