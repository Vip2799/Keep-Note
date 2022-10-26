import { TestBed } from '@angular/core/testing';

import { CanActiveLoginGuard } from './can-active-login.guard';

describe('CanActiveLoginGuard', () => {
  let guard: CanActiveLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActiveLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
