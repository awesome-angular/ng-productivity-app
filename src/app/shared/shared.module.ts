import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxBootstrapModule } from './modules/ngx-bootstrap.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
	declarations: [SidenavComponent],
	imports: [
		CommonModule,
		NgxBootstrapModule
	],
	exports: [
		CommonModule,
		NgxBootstrapModule,
		SidenavComponent
	]
})
export class SharedModule { }
