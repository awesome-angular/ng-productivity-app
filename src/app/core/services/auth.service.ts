import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: BehaviorSubject<User|null> = new BehaviorSubject(null);
	public readonly user$: Observable<User|null> = this.user.asObservable();

  constructor(private http: HttpClient) { }

  public register(name: string, email: string, password: string): Observable<User|null> {
    const API_KEY: string = 'AIzaSyAkgLyl4GXcHXe1Y7NhjPpntXVQ0fCsOuc';
    const API_AUTH_BASEURL: string = `https://www.googleapis.com/identitytoolkit/v3/relyingparty`;
    const registerEndpoint: string = `${API_AUTH_BASEURL}/signupNewUser?key=${API_KEY}`;
    
    const data = {
      email: email,
      password: password,
      returnSecureToken: true
    };

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':  'application/json'})
    };

    return this.http.post<User>(registerEndpoint, data, httpOptions);
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
