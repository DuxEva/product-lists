import { TestBed } from '@angular/core/testing';

import { ImageChangeService } from './image-change.service';

describe('ImageChangeService', () => {
  let service: ImageChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
