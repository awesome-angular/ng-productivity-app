import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProtectedRoutingModule } from './protected-routing.module';
import { ProtectedComponent } from './protected.component';

@NgModule({
	declarations: [ProtectedComponent],
	imports: [
		SharedModule,
		ProtectedRoutingModule
	]
})
export class ProtectedModule { }
