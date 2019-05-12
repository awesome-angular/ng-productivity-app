import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'al-workday-form',
	templateUrl: './workday-form.component.html',
	styles: []
})
export class WorkdayFormComponent implements OnInit {

	workdayForm: FormGroup;

	constructor(private fb: FormBuilder) { }

	ngOnInit() {
		this.workdayForm = this.createWorkdayForm();
	}

	get dueDate() { return this.workdayForm.get('dueDate') }
	get notes() { return this.workdayForm.get('notes') }
	get tasks() { return this.workdayForm.get('tasks') as FormArray; }

	createWorkdayForm(): FormGroup {
		return this.fb.group({
			'dueDate': ['', [
				Validators.required
			]],
			'tasks': this.fb.array([], [
				Validators.required,
				Validators.maxLength(6)
			]),
			'notes': ['', [
				Validators.maxLength(1000)
			]]
		});
	}

	submit(): void {
		console.info(this.workdayForm.value);
	}

}
