import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Query, User } from '../app.models';

@Injectable({
  providedIn: 'root',
})
export class SearcherService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private location: Location
  ) {}

  public newQuery$(query: Query): Observable<any> {
    return this.http.post(environment.newQuery, query);
  }

  public getQueries$(user: User): Observable<any> {
    return this.http.post(environment.getQuerys, user);
  }

  public download(id: string): void {
    window.open(environment.download + id);
  }
}
