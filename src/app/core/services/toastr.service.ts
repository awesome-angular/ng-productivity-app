import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, timer } from 'rxjs';
import { take } from 'rxjs/operators';

type Category = 'success' | 'info' | 'warning' | 'danger';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  private toastr: BehaviorSubject<any> = new BehaviorSubject(null);
  public readonly toastr$: any = this.toastr.asObservable();

  constructor() { }

  public showToastr(category: Category, message: string): void {
    timer(0, 3000).pipe(take(2)).subscribe(i => {
      if (i === 0) {
        this.toastr.next({ category: category, message: message });
      } else {
        this.toastr.next(null);
      }
    });
  }

  public closeToastr() {
    this.toastr.next(null);
  }
}
