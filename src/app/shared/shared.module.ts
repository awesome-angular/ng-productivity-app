import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxBootstrapModule } from './modules/ngx-bootstrap.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
	declarations: [SidenavComponent],
	imports: [
		CommonModule,
		NgxBootstrapModule,
		ReactiveFormsModule
	],
	exports: [
		CommonModule,
		NgxBootstrapModule,
		SidenavComponent,
		ReactiveFormsModule
	]
})
export class SharedModule { }
