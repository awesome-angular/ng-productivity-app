import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgModule } from '@angular/core';
import { PopoverModule } from 'ngx-bootstrap/popover';

@NgModule({
	declarations: [],
	imports: [
		AlertModule.forRoot(),
		BsDatepickerModule.forRoot(),
		BsDropdownModule.forRoot(),
		CommonModule,
		ModalModule.forRoot(),
		PopoverModule.forRoot()
	],
	exports: [
		AlertModule,
		BsDatepickerModule,
		BsDropdownModule,
		CommonModule,
		ModalModule,
		PopoverModule
	]
})
export class SharedModule { }
