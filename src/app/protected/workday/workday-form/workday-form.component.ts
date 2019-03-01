import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'al-workday-form',
	templateUrl: './workday-form.component.html',
	styles: []
})
export class WorkdayFormComponent implements OnInit {

	private workdayForm: FormGroup;

	constructor(private fb: FormBuilder) { }

	ngOnInit() {
		this.workdayForm = this.createWorkdayForm();

		// exemple
		let taskGroup = this.fb.group({
			'title': 'Ecrire un article sur awesome-angular.com'
		});
		this.tasks.push(taskGroup);
	}

	get dueDate() { return this.workdayForm.get('dueDate') }
	get notes() { return this.workdayForm.get('notes') }
	get tasks() { return this.workdayForm.get('tasks') as FormArray; }

	createWorkdayForm(): FormGroup {
		return this.fb.group({
			'dueDate': '',
			'tasks': this.fb.array([]),
			'notes': ''
		});
	}

	submit() {
		console.info(this.workdayForm.value);
	}

}
