import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'al-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

	private prefix: string = 'app';
	private dashboardPath: string = `${this.prefix}/dashboard`;
	private planningPath: string = `${this.prefix}/planning`;
	private workdayPath: string = `${this.prefix}/workday`;
	private profilPath: string = `${this.prefix}/profil`;
	private parametersPath: string = `${this.prefix}/parameters`;

	constructor(private router: Router) { }

	ngOnInit() {
	}

	private navigate(page: string): void {
		this.router.navigate([page]);
	}

	public isActive(page: string): boolean {
		return this.router.isActive(page, true);
	}

}
