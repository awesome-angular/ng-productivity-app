import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { PublicModule } from '../public/public.module';
import { ProtectedModule } from '../protected/protected.module';
import { FirebaseModule } from './modules/firebase.module';


@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		FirebaseModule,
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
