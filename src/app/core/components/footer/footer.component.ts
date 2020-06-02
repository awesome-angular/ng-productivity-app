import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from 'src/app/shared/models/user';
import { Observable } from 'rxjs';

@Component({
	selector: 'al-footer',
	templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

	user$: Observable<User|null>;

	constructor(private authService: AuthService) { }

	ngOnInit() {
		this.user$ = this.authService.user$;
	}

}
