import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private isSidenavCollapsed: BehaviorSubject<boolean> = new BehaviorSubject(false);
	public readonly isSidenavCollapsed$: Observable<boolean> = this.isSidenavCollapsed.asObservable();

	constructor() { }

  public toggleSidenav() {
    this.isSidenavCollapsed.next(!this.isSidenavCollapsed.value);
  }
}
