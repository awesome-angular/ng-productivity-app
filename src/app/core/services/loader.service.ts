import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);
	public readonly isLoading$: Observable<boolean> = this.isLoading.asObservable();

  constructor() { }

  public setLoading(loading: boolean): void {
		this.isLoading.next(loading);
	}
}
