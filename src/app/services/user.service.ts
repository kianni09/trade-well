import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { User, LoginForm } from '../app.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private location: Location,
  ) {
    this.UserLoad()
   }


  public login$(loginForm: LoginForm): Observable<any> {
    return this.http.post( environment.login, loginForm);
  }

  public user: User;

  private UserLoad() {
    if (localStorage.getItem('TradeWellUser')) {
      this.user = JSON.parse(localStorage.getItem('TradeWellUser'));
      this.router.navigate(["main"]);
    } else {
      this.router.navigate(['title']);
    }
  }


}
