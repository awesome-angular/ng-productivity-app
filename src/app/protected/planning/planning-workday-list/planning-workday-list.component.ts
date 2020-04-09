import { Component, OnInit } from '@angular/core';
import { WorkdaysService } from 'src/app/core/services/workdays.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
	selector: 'al-planning-workday-list',
	templateUrl: './planning-workday-list.component.html',
	styles: []
})
export class PlanningWorkdayListComponent implements OnInit {

	constructor(
		private authService: AuthService,
		private workdaySerice: WorkdaysService) { }

	ngOnInit() {
		const id: string = this.authService.currentUser.id;
		this.workdaySerice.getWorkdayByUser(id).subscribe(workdays => {
			console.info(workdays);
		});
	}

	onWorkdayRemoved(dueDate: string) {
		console.info(dueDate);
	}

}
