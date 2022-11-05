import { TestBed } from '@angular/core/testing';

import { AnsResponseFactoryService } from './ans-response-factory.service';

describe('AnsResponseFactoryService', () => {
  let service: AnsResponseFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnsResponseFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
