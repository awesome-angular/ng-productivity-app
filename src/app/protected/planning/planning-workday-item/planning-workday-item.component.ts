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
	@Output() workdayRemoved = new EventEmitter<Workday>();

	constructor(private router: Router) {}

	ngOnInit() {}

	removeWorkday() {
		this.workdayRemoved.emit(this.workday);
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
