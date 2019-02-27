import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'al-home-banner',
	templateUrl: './home-banner.component.html',
	styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent {

	constructor(private router: Router) { }

	public navigateToDashboard(): void {
		this.router.navigate(['app/dashboard']);
	}

}
