import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'al-workday-form-tasks',
	templateUrl: './workday-form-tasks.component.html',
	styleUrls: ['./workday-form-tasks.component.scss']
})
export class WorkdayFormTasksComponent implements OnInit {

	@Input() tasks: FormArray;
	@Input() workdayForm: FormGroup;

	constructor(private fb: FormBuilder) { }

	ngOnInit() {
	}

	onAddedTask() {
		let taskGroup = this.fb.group({
			'title': ''
		});
		this.tasks.push(taskGroup);
	}

	onRemovedTask(index: number) {
		this.tasks.removeAt(index);
	}

}
