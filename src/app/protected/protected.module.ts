import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ParametersModule } from './parameters/parameters.module';
import { PlanningModule } from './planning/planning.module';
import { ProfilModule } from './profil/profil.module';
import { WorkdayModule } from './workday/workday.module';
import { ProtectedComponent } from './protected.component';

@NgModule({
	declarations: [ProtectedComponent],
	imports: [
		SharedModule,
		ProtectedRoutingModule,
		DashboardModule,
		ParametersModule,
		PlanningModule,
		ProfilModule,
		WorkdayModule
	]
})
export class ProtectedModule { }
