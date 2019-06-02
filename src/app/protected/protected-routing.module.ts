import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProtectedComponent } from './protected.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
	{
		path: 'app',
		component: ProtectedComponent,
		canActivate: [AuthGuard],
		canActivateChild: [AuthGuard],
		children: [
			{
				path: 'dashboard',
				loadChildren: './dashboard/dashboard.module#DashboardModule',
			},
			{
				path: 'parameters',
				loadChildren: './parameters/parameters.module#ParametersModule'
			},
			{
				path: 'planning',
				loadChildren: './planning/planning.module#PlanningModule'
			},
			{
				path: 'profil',
				loadChildren: './profil/profil.module#ProfilModule'
			},
			{
				path: 'workday',
				loadChildren: './workday/workday.module#WorkdayModule'
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProtectedRoutingModule { }
