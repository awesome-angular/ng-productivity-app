import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { PublicModule } from '../public/public.module';
import { ProtectedModule } from '../protected/protected.module';
import { FirebaseModule } from './modules/firebase.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
	declarations: [NavbarComponent, FooterComponent, PageNotFoundComponent, LoaderComponent],
	imports: [
		CommonModule,
		FirebaseModule,
		PublicModule,
		ProtectedModule
	],
	exports: [
		NavbarComponent,
		FooterComponent,
		PageNotFoundComponent,
		LoaderComponent,
	]
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
			throw new Error('CoreModule is already loaded.');
		}
	}
}
