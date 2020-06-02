import { Component, OnInit, Input } from '@angular/core';
import { Workday } from 'src/app/shared/models/workday';
import { Subject, interval, Observable, of } from 'rxjs';
import { takeUntil, map, takeWhile, delay } from 'rxjs/operators';
import { Task } from 'src/app/shared/models/task';
import { WorkdaysService } from 'src/app/core/services/workdays.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'al-dashboard-workday',
  templateUrl: './dashboard-workday.component.html',
  styleUrls: ['./dashboard-workday.component.scss']
})
export class DashboardWorkdayComponent implements OnInit {

  @Input() workday: Workday;
  isWorkdayComplete: boolean;
  isPomodoroActive: boolean;
  startPomodoro$: Subject<string>;
  cancelPomodoro$: Subject<string>;
  completePomodoro$: Subject<string>;
  currentProgress: number;
  maxProgress: number;
  pomodoro$: Observable<number>;

  constructor(
    private workdaysService: WorkdaysService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.isWorkdayComplete = (this.task === undefined);
    this.isPomodoroActive = false;
    this.startPomodoro$ = new Subject();
    this.cancelPomodoro$ = new Subject();
    this.completePomodoro$ = new Subject();
    this.currentProgress = 0
    this.maxProgress = this.authService.currentUser.pomodoroDuration;
    this.pomodoro$ = interval(1000).pipe(
      takeUntil(this.cancelPomodoro$),
      takeUntil(this.completePomodoro$),
      takeWhile(progress => progress <= this.maxProgress),
      map(x => x + 1)
    );
  }

  get task(): Task|undefined {
    return this.workday.tasks.find((task: Task) => task.todo > task.done);
  }

  startPomodoro() {
    this.startPomodoro$.next('start');
    this.isPomodoroActive = true;
    this.pomodoro$.subscribe({
      next: progress => {
        this.currentProgress = progress;
        if(progress === this.maxProgress) {
          of(0).pipe(delay(500)).subscribe(_ => this.completePomodoro())
        }
      }
    });
  }

  cancelPomodoro() {
    this.cancelPomodoro$.next('cancel');
    this.isPomodoroActive = false;
  }

  completePomodoro() {
    this.completePomodoro$.next('complete');
    this.isPomodoroActive = false;

    // Complete current pomodoro
    this.task.done++;
    this.workdaysService.update(this.workday).subscribe();

    // Check workday complete
    this.isWorkdayComplete = (this.task === undefined);
  }
}
