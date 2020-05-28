import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/shared/models/task';

@Component({
  selector: 'al-dashboard-task-item',
  templateUrl: './dashboard-task-item.component.html',
  styleUrls: ['./dashboard-task-item.component.scss']
})
export class DashboardTaskItemComponent implements OnInit {

  @Input() task: Task;

  constructor() { }

  ngOnInit(): void {
  }
}
