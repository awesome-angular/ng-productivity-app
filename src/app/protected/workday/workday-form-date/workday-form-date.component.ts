import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Form } from '@angular/forms';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { DateService } from 'src/app/core/services/date.service';

@Component({
	selector: 'al-workday-form-date',
	templateUrl: './workday-form-date.component.html',
	styles: []
})
export class WorkdayFormDateComponent implements OnInit {

	@Input() dueDate: FormControl;
	@Output() dateSelected = new EventEmitter<string>();

	constructor(
		private localeService: BsLocaleService,
		private dateService: DateService) { }

	ngOnInit() {
		this.localeService.use('fr');
	}

	selectDate(date: Date = new Date()): void {
		if(!date) return;
		const displayDate: string = this.dateService.getDisplayDate(date); 
    this.dateSelected.emit(displayDate);
  }

}
