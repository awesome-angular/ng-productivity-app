import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
	declarations: [RegisterComponent],
	imports: [
		SharedModule,
		RegisterRoutingModule
	]
})
export class RegisterModule { }
