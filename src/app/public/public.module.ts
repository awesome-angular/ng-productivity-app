import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { PublicRoutingModule } from './public-routing.module';

@NgModule({
	declarations: [],
	imports: [
		SharedModule,
		PublicRoutingModule
	]
})
export class PublicModule { }
