import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'al-workday-form-notes',
	templateUrl: './workday-form-notes.component.html',
	styles: []
})
export class WorkdayFormNotesComponent implements OnInit {

	@Input() notes: FormControl;

	constructor() { }

	ngOnInit() {
	}

}
