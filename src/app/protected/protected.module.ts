import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ProtectedRoutingModule } from './protected-routing.module';

@NgModule({
	declarations: [],
	imports: [
		SharedModule,
		ProtectedRoutingModule
	]
})
export class ProtectedModule { }
