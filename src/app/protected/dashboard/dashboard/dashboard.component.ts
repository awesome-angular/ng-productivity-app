import { Component, OnInit } from '@angular/core';
import { DateService } from 'src/app/core/services/date.service';

@Component({
  selector: 'al-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  currentDate: string;

  constructor(private dateService: DateService) { }

  ngOnInit() {
    this.currentDate = this.dateService.getDisplayDate(new Date());
  }

}
