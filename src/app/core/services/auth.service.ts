import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: BehaviorSubject<User|null> = new BehaviorSubject(null);
	public readonly user$: Observable<User|null> = this.user.asObservable();

  constructor(private http: HttpClient) { }

  public register(name: string, email: string, password: string): Observable<User|null> {
    const url: string = `${environment.firebase.auth.baseURL}/signupNewUser?key=${environment.firebase.apiKey}`;
    
    const data = {
      email: email,
      password: password,
      returnSecureToken: true
    };

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':  'application/json'})
    };

    return this.http.post<User>(url, data, httpOptions);
  }

  public login(email: string, password: string): Observable<User|null> {
    return of(new User()).pipe(
      delay(1000),
      tap(user => this.user.next(user))
    );
  }

  public logout(): Observable<null> {
    return of(null).pipe(
      delay(1000),
      tap(_ => this.user.next(null))
    );
  }
}
