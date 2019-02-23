import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ParametersComponent } from './parameters/parameters/parameters.component';
import { PlanningComponent } from './planning/planning/planning.component';
import { ProfilComponent } from './profil/profil/profil.component';
import { WorkdayComponent } from './workday/workday/workday.component';

const routes: Routes = [
	{
		path: 'app',
		children: [
			{ path: 'dashboard', component: DashboardComponent },
			{ path: 'parameters', component: ParametersComponent },
			{ path: 'planning', component: PlanningComponent },
			{ path: 'profil', component: ProfilComponent },
			{ path: 'workday', component: WorkdayComponent },
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProtectedRoutingModule { }
