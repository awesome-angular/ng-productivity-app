import { Component, Input } from '@angular/core';

@Component({
	selector: 'al-planning-workday-item',
	templateUrl: './planning-workday-item.component.html',
	styles: []
})
export class PlanningWorkdayItemComponent {

	private currentWorkday;

	@Input()
	set workday(workday) {
		this.currentWorkday = workday || {};

		if ('Lundi' === workday.dueDate) {
			this.currentWorkday.dueDate += ' (Aujourd\'hui)';
		}

	}

	get workday() { return this.workday; }

}
