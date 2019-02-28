import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { WorkdayComponent } from './workday/workday.component';
import { WorkdayRoutingModule } from './workday-routing.module';
import { WorkdayFormComponent } from './workday-form/workday-form.component';
import { WorkdayFormDateComponent } from './workday-form-date/workday-form-date.component';
import { WorkdayFormNotesComponent } from './workday-form-notes/workday-form-notes.component';
import { WorkdayFormTasksComponent } from './workday-form-tasks/workday-form-tasks.component';
import { WorkdayFormTasksItemComponent } from './workday-form-tasks-item/workday-form-tasks-item.component';
import { WorkdayFormTasksAddComponent } from './workday-form-tasks-add/workday-form-tasks-add.component';

@NgModule({
	declarations: [WorkdayComponent, WorkdayFormComponent, WorkdayFormDateComponent, WorkdayFormNotesComponent, WorkdayFormTasksComponent, WorkdayFormTasksItemComponent, WorkdayFormTasksAddComponent],
	imports: [
		SharedModule,
		WorkdayRoutingModule
	]
})
export class WorkdayModule { }
