import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfilComponent } from './profil/profil.component';

@NgModule({
	declarations: [ProfilComponent],
	imports: [
		SharedModule
	]
})
export class ProfilModule { }
