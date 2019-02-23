import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ParametersComponent } from './parameters/parameters.component';

@NgModule({
	declarations: [ParametersComponent],
	imports: [
		SharedModule
	]
})
export class ParametersModule { }
