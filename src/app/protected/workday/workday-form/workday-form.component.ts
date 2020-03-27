import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { WorkdaysService } from 'src/app/core/services/workdays.service';
import { Workday } from 'src/app/shared/models/workday';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'al-workday-form',
	templateUrl: './workday-form.component.html',
	styles: []
})
export class WorkdayFormComponent implements OnInit {

	workdayForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private workdaysService: WorkdaysService,
		private authService: AuthService) { }

	ngOnInit() {
		this.workdayForm = this.createWorkdayForm();
	}

	get dueDate() { return this.workdayForm.get('dueDate'); }
	get notes() { return this.workdayForm.get('notes'); }
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
		const userId: string = this.authService.currentUser.id;
		const workday: Workday = new Workday({...{ userId: userId }, ...this.workdayForm.value});

		this.workdaysService.save(workday).subscribe(
			_ => this.router.navigate(['/app/planning']),
			_ => this.workdayForm.reset()
	  );
	}

}
