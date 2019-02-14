import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
	selector: 'al-planning-workday-item',
	templateUrl: './planning-workday-item.component.html',
	styles: []
})
export class PlanningWorkdayItemComponent implements OnChanges {

	@Input() dueDate: string;
	@Input() doneTasks: number | string;
	@Input() remainingTasks: number | string;

	ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
		for (let propName in changes) {
			this.update(propName, changes[propName].currentValue);
		}
	}

	update(propName, propValue) {

		switch (propName) {
			case 'dueDate': {
				if ('Lundi' === propValue) this.dueDate += ' (Aujourd\'hui)';
				break;
			}
			case 'doneTasks': {
				if (0 === propValue) this.doneTasks = 'Aucune tâche terminé.';
				break;
			}
			case 'remainingTasks': {
				if (0 === propValue) this.remainingTasks = 'Journée de travail terminée !';
				break;
			}
			default: {
				break;
			}
		}
	}

	removeWorkday() {
		this.dueDate = '';
		this.doneTasks = 0;
		this.remainingTasks = 0;
	}

}
