import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'al-workday-form-tasks-item',
	templateUrl: './workday-form-tasks-item.component.html',
	styles: []
})
export class WorkdayFormTasksItemComponent implements OnInit {

	@Input() task: FormControl;

	constructor() { }

	ngOnInit() {
	}

}
