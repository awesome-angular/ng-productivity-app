import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'al-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	public homePath: string = 'home';
	public loginPath: string = 'login';
	public registerPath: string = 'register';

	constructor(private router: Router) { }

	ngOnInit() {
	}

	public isActive(page: string): boolean {
		return this.router.isActive(page, true);
	}

	public navigate(page: string): void {
		this.router.navigate([page]);
	}


}
