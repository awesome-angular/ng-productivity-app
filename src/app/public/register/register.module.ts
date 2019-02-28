import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
	declarations: [RegisterComponent, RegisterFormComponent],
	imports: [
		SharedModule,
		RegisterRoutingModule
	]
})
export class RegisterModule { }
