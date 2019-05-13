import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/core/services/layout.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'al-protected',
	templateUrl: './protected.component.html',
	styleUrls: ['./protected.component.scss']
})
export class ProtectedComponent implements OnInit {

	public isSidenavCollapsed$: Observable<boolean>;

	constructor(private layoutService: LayoutService) { }

	ngOnInit() {
		this.isSidenavCollapsed$ = this.layoutService.isSidenavCollapsed$;
	}

}
