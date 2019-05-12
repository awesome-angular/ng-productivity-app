import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'al-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

	public prefix: string = 'app';
	public dashboardPath: string = `${this.prefix}/dashboard`;
	public planningPath: string = `${this.prefix}/planning`;
	public workdayPath: string = `${this.prefix}/workday`;
	public profilPath: string = `${this.prefix}/profil`;
	public parametersPath: string = `${this.prefix}/parameters`;

	constructor(private router: Router) { }

	ngOnInit() {
	}

	public navigate(page: string): void {
		this.router.navigate([page]);
	}

	public isActive(page: string): boolean {
		return this.router.isActive(page, true);
	}

}
