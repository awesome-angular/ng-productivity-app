import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'src/app/core/services/toastr.service';
import { Observable } from 'rxjs';

interface Toastr {
  category: string;
  message: string;
}

@Component({
  selector: 'al-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent implements OnInit {

  public toastr$: Observable<Toastr | null>;


  constructor(private toastrService: ToastrService) { }

  ngOnInit() {
    this.toastr$ = this.toastrService.toastr$;
  }

  closeToastr() {
    this.toastrService.closeToastr();
  }

}
