import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		AlertModule.forRoot(),
		BsDatepickerModule.forRoot(),
		BsDropdownModule.forRoot(),
		ModalModule.forRoot(),
		PopoverModule.forRoot(),
	],
	exports: [
		AlertModule,
		BsDatepickerModule,
		BsDropdownModule,
		ModalModule,
		PopoverModule
	]
})
export class NgxBootstrapModule { }
