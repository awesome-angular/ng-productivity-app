import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'al-planning-workday-list',
	templateUrl: './planning-workday-list.component.html',
	styles: []
})
export class PlanningWorkdayListComponent implements OnInit {

	constructor() { }

	ngOnInit() {}

	onWorkdayRemoved(dueDate: string) {
		console.info(dueDate);
	}

}
