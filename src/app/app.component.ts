import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
	selector: 'al-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	constructor(
		private usersService: UsersService,
		private authService: AuthService) {}

	ngOnInit() {
		this.tryAutoLogin();
	}

	private tryAutoLogin() {
		const token = localStorage.getItem('token');

		if (!token) { return; }

		const expirationDate = +localStorage.getItem('expirationDate');
		const now = new Date().getTime();

		if (now >= expirationDate) {
			return;
		}

		const userId = localStorage.getItem('userId');
		this.usersService.get(userId).subscribe(user => {
			this.authService.autoLogin(user);
		});
	}
}
