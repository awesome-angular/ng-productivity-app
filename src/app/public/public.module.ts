import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { PublicRoutingModule } from './public-routing.module';
import { HomepageModule } from './homepage/homepage.module';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';

@NgModule({
	declarations: [],
	imports: [
		SharedModule,
		PublicRoutingModule,
		HomepageModule,
		RegisterModule,
		LoginModule
	]
})
export class PublicModule { }
