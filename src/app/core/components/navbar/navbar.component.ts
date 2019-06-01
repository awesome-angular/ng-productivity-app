import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/core/services/layout.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';

@Component({
	selector: 'al-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	public homePath = 'home';
	public loginPath = 'login';
	public registerPath = 'register';
	public user$: Observable<User|null>;

	constructor(
		private router: Router,
		private layoutService: LayoutService,
		private authService: AuthService) { }

	ngOnInit() {
		this.user$ = this.authService.user$;
	}

	public isActive(page: string): boolean {
		return this.router.isActive(page, true);
	}

	public navigate(page: string): void {
		this.router.navigate([page]);
	}

	public toggleSidenav() {
		this.layoutService.toggleSidenav();
	}

}
