import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'al-workday-form-date',
	templateUrl: './workday-form-date.component.html',
	styles: []
})
export class WorkdayFormDateComponent implements OnInit {

	@Input() dueDate: FormControl;

	constructor() { }

	ngOnInit() {
	}

}
