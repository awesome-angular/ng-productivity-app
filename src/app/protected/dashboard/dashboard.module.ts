import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardPomodoroProgressComponent } from './dashboard-pomodoro-progress/dashboard-pomodoro-progress.component';

@NgModule({
	declarations: [DashboardComponent, DashboardPomodoroProgressComponent],
	imports: [
		SharedModule,
		DashboardRoutingModule
	]
})
export class DashboardModule { }
