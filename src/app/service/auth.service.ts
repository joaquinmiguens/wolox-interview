import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLogged: BehaviorSubject<boolean>;
  public logged: Observable<boolean>;
  public postUrl: string =
    'http://private-8e8921-woloxfrontendinverview.apiary-mock.com/login';
  constructor(private http: HttpClient) {
    this.isLogged = new BehaviorSubject<boolean>(false);
    this.logged = this.isLogged.asObservable();
  }
  update(state: boolean): void {
    this.isLogged.next(state);
  }
  login(email: string, password: string): Observable<object> {
    let body = {};
    body['email'] = email;
    body['password'] = password;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post<object>(this.postUrl, body, { headers })
      .pipe(
        map((response: Observable<object>) => {
          if (response) {
            this.update(true);
          }
          return response;
        })
      );
  }
  isLoggedIn(): boolean {
    const token = JSON.parse(localStorage.getItem('userToken'));
    if (token === null || token === '') {
      localStorage.setItem('userToken', JSON.stringify(''));
      this.update(false);
      return false;
    } else {
      this.update(true);
      return true;
    }
  }
}
