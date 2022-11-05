import { TestBed } from '@angular/core/testing';

import { AnimationShakeService } from './animation-shake.service';

describe('AnimationShakeService', () => {
  let service: AnimationShakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimationShakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
