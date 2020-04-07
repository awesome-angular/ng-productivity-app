import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  /**
   * Returns the date passed in parameter in format: 'dd/mm/YYYY'. 
   */
  getDisplayDate(date: Date): string {
		const year: number = date.getFullYear();
		const month: string = ("0" + (date.getMonth() + 1)).slice(-2);
		const day: string = ("0" + date.getDate()).slice(-2);

		return `${day}/${month}/${year}`;
	}
}
