import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { AuthService } from './auth.service';
import { Token } from '../pages/login/login.component';
import { map } from 'rxjs/operators';

describe('AuthService', () => {
  let authService: AuthService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    authService = TestBed.inject(AuthService);
  });
  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });
  describe('#login', () => {
    it('should login with email and password and return token', () => {
      const user = {
        email: 'user@wolox.com.ar',
        password: '12345678',
      };
      const response: Token = {
        token: 'qiowAS9ndnjLKSS32LaLAPlDKL2',
      };
      authService
        .login(user.email, user.password)
        .pipe(map(($token) => expect($token).toEqual(response)));
    });
  });
});
