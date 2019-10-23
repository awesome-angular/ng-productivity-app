import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { PublicModule } from '../public/public.module';
import { ProtectedModule } from '../protected/protected.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ToastrComponent } from './components/toastr/toastr.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
	declarations: [NavbarComponent, FooterComponent, PageNotFoundComponent, LoaderComponent, ToastrComponent],
	imports: [
		CommonModule,
		BrowserAnimationsModule,
		HttpClientModule,
		PublicModule,
		ProtectedModule,
		AlertModule.forRoot(),
	],
	exports: [
		NavbarComponent,
		FooterComponent,
		PageNotFoundComponent,
		LoaderComponent,
		ToastrComponent,
	]
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
			throw new Error('CoreModule is already loaded.');
		}
	}
}
