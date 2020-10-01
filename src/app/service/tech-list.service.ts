import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TechListService {
  public getUrl: string =
    'https://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs';
  constructor(private http: HttpClient) {}

  getCandidates(): Observable<object> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.getUrl, { headers });
  }
}
