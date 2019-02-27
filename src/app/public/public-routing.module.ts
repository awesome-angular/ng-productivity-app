import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{
		path: 'login',
		loadChildren: './login/login.module#LoginModule'
	},
	{
		path: 'register',
		loadChildren: './register/register.module#RegisterModule'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PublicRoutingModule { }
