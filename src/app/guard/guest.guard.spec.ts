import { TestBed } from '@angular/core/testing';

import { GuestGuard } from './guest.guard';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

describe('GuestGuard', () => {
  let guard: GuestGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AuthService, Router],
    });
    guard = TestBed.inject(GuestGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
