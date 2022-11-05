import { TestBed } from '@angular/core/testing';

import { AnsRequestFactoryService } from './ans-request-factory.service';

describe('AnsRequestFactoryService', () => {
  let service: AnsRequestFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnsRequestFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
