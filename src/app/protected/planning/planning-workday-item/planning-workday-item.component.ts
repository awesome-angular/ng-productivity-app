import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'al-planning-workday-item',
	templateUrl: './planning-workday-item.component.html',
	styles: []
})
export class PlanningWorkdayItemComponent implements OnInit {

	@Input('workday') currentWorkday;

	constructor() { }

	ngOnInit() {
	}

}
