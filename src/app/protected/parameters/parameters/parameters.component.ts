import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'al-parameters',
  templateUrl: './parameters.component.html',
  styles: []
})
export class ParametersComponent implements OnInit {

  parametersForm: FormGroup;
  pomodoros: number[] = [15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

  constructor(
    public fb: FormBuilder,
    public authService: AuthService) { }

  ngOnInit() {  
    this.parametersForm = this.fb.group({
      pomodoro: ['', [Validators.required]]
    })
  }

  onSubmit() {
    const user: User = this.authService.currentUser;
    user.pomodoroDuration = this.parametersForm.get('pomodoro').value * 60;
    this.authService.updateUserState(user).subscribe();
  }

}
