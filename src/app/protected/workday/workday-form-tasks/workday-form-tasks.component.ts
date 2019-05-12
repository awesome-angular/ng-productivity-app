import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

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

	createTaskForm(): FormGroup {
		return this.fb.group({
			'title': ['', [
				Validators.required,
				Validators.minLength(1),
				Validators.maxLength(150)
			]],
			'todo': [1, [
				Validators.required,
				Validators.min(1),
				Validators.max(5)
			]]
		});
	}

	onAddedTask() {
		const task = this.createTaskForm();
		this.tasks.push(task);
	}

	onRemovedTask(index: number) {
		this.tasks.removeAt(index);
	}

}
