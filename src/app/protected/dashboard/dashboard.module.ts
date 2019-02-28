import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
	declarations: [DashboardComponent],
	imports: [
		SharedModule,
		DashboardRoutingModule
	]
})
export class DashboardModule { }
