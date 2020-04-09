import { Component, OnInit } from '@angular/core';
import { WorkdaysService } from 'src/app/core/services/workdays.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Observable } from 'rxjs';
import { Workday } from 'src/app/shared/models/workday';

@Component({
	selector: 'al-planning-workday-list',
	templateUrl: './planning-workday-list.component.html',
	styles: []
})
export class PlanningWorkdayListComponent implements OnInit {

	workdays$: Observable<Workday>;

	constructor(
		private authService: AuthService,
		private workdaySerice: WorkdaysService) { }

	ngOnInit() {
		const id: string = this.authService.currentUser.id;
		this.workdays$ = this.workdaySerice.getWorkdayByUser(id);
	}

	onWorkdayRemoved(dueDate: string) {
		console.info(dueDate);
	}

}
