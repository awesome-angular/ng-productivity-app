import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'al-parameters',
  templateUrl: './parameters.component.html',
  styles: []
})
export class ParametersComponent implements OnInit {

  parametersForm: FormGroup;
  pomodoros: number[] = [15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

  constructor(public fb: FormBuilder) { }

  ngOnInit() {  
    this.parametersForm = this.fb.group({
      pomodoro: ['', [Validators.required]]
    })
  }

  onSubmit() {
    console.log(this.parametersForm.get('pomodoro').value);
  }

}
