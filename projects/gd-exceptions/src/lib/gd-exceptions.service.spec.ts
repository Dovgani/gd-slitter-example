import { TestBed } from '@angular/core/testing';

import { GDTabService } from './gd-tab.service';

describe('GDTabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GDTabService = TestBed.get(GDTabService);
    expect(service).toBeTruthy();
  });
});
