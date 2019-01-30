import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanningComponent } from './planning/planning/planning.component';

const routes: Routes = [
	{ path: 'planning', component: PlanningComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProtectedRoutingModule { }
