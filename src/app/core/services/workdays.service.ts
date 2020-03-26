import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkdaysService {

  constructor(private http: HttpClient) { }

  save() {
    // TODO : Push workday to Firestore.
  }
}
