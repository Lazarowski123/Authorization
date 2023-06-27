import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$;

  get token() {
    return localStorage.getItem('token');
  }

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {
    this._isLoggedIn$.next(!!this.token);
  }

  login(email: string, password: string) {
    return this.apiService.login(email, password).pipe(
      tap((respons: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem('token', respons.access_token);
      })
    );
  }
  logout() {
    this._isLoggedIn$.next(false);
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
