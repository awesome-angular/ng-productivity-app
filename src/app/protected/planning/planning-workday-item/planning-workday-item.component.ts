import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Workday } from 'src/app/shared/models/workday';
import { Router } from '@angular/router';

@Component({
	selector: 'al-planning-workday-item',
	templateUrl: './planning-workday-item.component.html',
	styles: []
})
export class PlanningWorkdayItemComponent implements OnInit {

	@Input() workday: Workday;
	@Output() workdayRemoved = new EventEmitter<string>();

	constructor(private router: Router) {}

	ngOnInit() {}

	removeWorkday(displayDate: string) {
		this.workdayRemoved.emit(displayDate);
	}

	goWorkday(workday: Workday) {
		this.router.navigate(
			['app/workday'], 
			{ 
				queryParams: { 
					date: workday.dueDate 
				} 
			}
		);
	}

}
