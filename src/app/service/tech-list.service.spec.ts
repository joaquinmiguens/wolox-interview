import { TestBed } from '@angular/core/testing';

import { TechListService } from './tech-list.service';

describe('TechListService', () => {
  let service: TechListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
