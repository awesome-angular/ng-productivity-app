import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPomodoroProgressComponent } from './dashboard-pomodoro-progress.component';

describe('DashboardPomodoroProgressComponent', () => {
  let component: DashboardPomodoroProgressComponent;
  let fixture: ComponentFixture<DashboardPomodoroProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPomodoroProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPomodoroProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
