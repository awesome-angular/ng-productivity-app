import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Workday } from 'src/app/shared/models/workday';
import { fromEvent, Subject, timer, interval, Observable } from 'rxjs';
import { tap, takeUntil, map } from 'rxjs/operators';

@Component({
  selector: 'al-dashboard-workday',
  templateUrl: './dashboard-workday.component.html',
  styleUrls: ['./dashboard-workday.component.scss']
})
export class DashboardWorkdayComponent implements OnInit {

  @Input() workday: Workday;
  isPomodoroActive: boolean;
  startPomodoro$: Subject<string>;
  cancelPomodoro$: Subject<string>;
  completePomodoro$: Subject<string>;
  currentProgress: number;
  maxProgress: number;
  pomodoro$: Observable<number>;

  constructor() { }

  ngOnInit(): void {
    this.isPomodoroActive = false;
    this.startPomodoro$ = new Subject();
    this.cancelPomodoro$ = new Subject();
    this.completePomodoro$ = new Subject();
    this.currentProgress = 0
    this.maxProgress = 5;
    this.pomodoro$ = interval(1000).pipe(map(x => x + 1));
  }

  startPomodoro() {
    this.startPomodoro$.next('start');
    this.isPomodoroActive = true;
    this.pomodoro$.pipe(
      takeUntil(this.cancelPomodoro$),
      takeUntil(this.completePomodoro$),
    ).subscribe(currentProgress => {
      this.currentProgress = currentProgress;
    });
  }

  cancelPomodoro() {
    this.cancelPomodoro$.next('cancel');
    this.isPomodoroActive = false;
  }

  completePomodoro() {
    this.completePomodoro$.next('complete');
    this.isPomodoroActive = false;
  }

}
