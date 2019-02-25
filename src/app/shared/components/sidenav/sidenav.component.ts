import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'al-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

	private dashboardPath: string = 'dashboard';
	private planningPath: string = 'planning';
	private workdayPath: string = 'workday';
	private profilPath: string = 'profil';
	private parametersPath: string = 'parameters';

	constructor(private router: Router) { }

	ngOnInit() {
	}

	private navigate(page: string): void {
		this.router.navigate([page]);
	}

}
