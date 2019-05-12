import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'al-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  public isLoading$: Observable<boolean>;

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.isLoading$ = this.loaderService.isLoading$;
  }

}
