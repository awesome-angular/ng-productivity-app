import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: BehaviorSubject<User|null> = new BehaviorSubject(null);
	public readonly user$: Observable<User|null> = this.user.asObservable();

  constructor() { }

  public register(name: string, email: string, password: string): Observable<User|null> {
    return of(new User()).pipe(
      delay(1000),
      tap(user => this.user.next(user))
    );
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
