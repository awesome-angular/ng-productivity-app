import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PublicModule } from '../public/public.module';
import { ProtectedModule } from '../protected/protected.module';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		SharedModule,
		PublicModule,
		ProtectedModule
	]
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
			throw new Error('CoreModule is already loaded.');
		}
	}
}
