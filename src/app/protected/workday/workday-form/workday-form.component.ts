import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { WorkdaysService } from 'src/app/core/services/workdays.service';
import { Workday } from 'src/app/shared/models/workday';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DateService } from 'src/app/core/services/date.service';

@Component({
	selector: 'al-workday-form',
	templateUrl: './workday-form.component.html',
	styles: []
})
export class WorkdayFormComponent implements OnInit {

	workdayId: string;
	workdayForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		private dateService: DateService,
		private router: Router,
		private route: ActivatedRoute,
		private workdaysService: WorkdaysService,
		private authService: AuthService) { }

	ngOnInit() {
		this.route.queryParams.subscribe(params => {
			this.workdayId = '';
			this.workdayForm = this.createWorkdayForm();
			if(params.date) {
				const date: Date = new Date(+params.date);
				this.dueDate.setValue(date);
			}
		});
	}

	get dueDate() { return this.workdayForm.get('dueDate'); }
	get notes() { return this.workdayForm.get('notes'); }
	get tasks() { return this.workdayForm.get('tasks') as FormArray; }

	onDateSelected(displayDate: string) {
		const userId: string = this.authService.currentUser.id;
		this.workdaysService.getWorkdayByDate(displayDate, userId).subscribe(workday => {
			this.resetWorkdayForm();
			
			if(!workday) return;
			
			this.workdayId = workday.id;
			this.notes.setValue(workday.notes);
			workday.tasks.forEach(task => {
				const taskField: FormGroup = this.fb.group({
					title: task.title,
					todo: task.todo,
					done: task.done
				});
				this.tasks.push(taskField);
			});
		}); 
	}

	resetWorkdayForm() {
		while(this.tasks.length !== 0) {
			this.tasks.removeAt(0);
		}
		this.notes.reset();
	}

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

		if(this.workdayId) {
			let workday: Workday = new Workday({...{id: this.workdayId }, ...this.workdayForm.value});
			workday.userId = userId;

			this.workdaysService.update(workday).subscribe(
				_ => this.router.navigate(['/app/planning']),
				_ => this.workdayForm.reset()
			);
			return;
		}

		let workday: Workday = new Workday({...this.workdayForm.value});
		workday.userId = userId;

		this.workdaysService.save(workday).subscribe(
			_ => this.router.navigate(['/app/planning']),
			_ => this.workdayForm.reset()
	  );
	}

}
