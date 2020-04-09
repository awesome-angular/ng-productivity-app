import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Workday } from 'src/app/shared/models/workday';

@Component({
	selector: 'al-planning-workday-item',
	templateUrl: './planning-workday-item.component.html',
	styles: []
})
export class PlanningWorkdayItemComponent implements OnInit {

	@Input() workday: Workday;
	@Output() workdayRemoved = new EventEmitter<string>();

	ngOnInit() {}

	removeWorkday(displayDate: string) {
		this.workdayRemoved.emit(displayDate);
	}

}
