import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { ToastrService } from './toastr.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private toastrService: ToastrService) { }

  public handleError(error) {
		this.toastrService.showToastr('danger', error.message);
		return throwError(error);
	}
}
