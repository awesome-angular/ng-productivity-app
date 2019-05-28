import { Component, OnInit, OnDestroy } from '@angular/core';
import { LayoutService } from 'src/app/core/services/layout.service';
import { Observable, Subscription } from 'rxjs';

@Component({
	selector: 'al-protected',
	templateUrl: './protected.component.html',
	styleUrls: ['./protected.component.scss']
})
export class ProtectedComponent implements OnInit, OnDestroy {

	public isSidenavCollapsed: boolean;
	private subscription: Subscription;

	constructor(private layoutService: LayoutService) { }

	ngOnInit() {
		this.subscription = this.layoutService.isSidenavCollapsed$
			.subscribe(isSidenavCollapsed => this.isSidenavCollapsed = isSidenavCollapsed);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
