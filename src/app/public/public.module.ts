import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { PublicRoutingModule } from './public-routing.module';
import { HomeModule } from './home/home.module';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';

@NgModule({
	declarations: [],
	imports: [
		SharedModule,
		PublicRoutingModule,
		HomeModule,
		RegisterModule,
		LoginModule
	]
})
export class PublicModule { }
