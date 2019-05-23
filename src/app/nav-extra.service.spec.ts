import { TestBed } from '@angular/core/testing';

import { NavExtraService } from './nav-extra.service';

describe('NavExtraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavExtraService = TestBed.get(NavExtraService);
    expect(service).toBeTruthy();
  });
});
