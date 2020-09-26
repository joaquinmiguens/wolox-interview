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
    console.log(email, password);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post(
        'http://private-8e8921-woloxfrontendinverview.apiary-mock.com/login',
        body,
        { headers }
      )
      .pipe(
        map((response: Observable<object>) => {
          console.log(response);
          if (response) {
            this.update(true);
            console.log(this.isLogged.value);
          }
          return response;
        })
      );
  }
  isLoggedIn(): boolean {
    const token = JSON.parse(localStorage.getItem('userToken'));
    console.log(token);
    if (token === null || token === '') {
      localStorage.setItem('userToken', JSON.stringify(''));
      this.isLogged.next(false);
      return false;
    } else {
      this.isLogged.next(true);
      return true;
    }
  }
}
