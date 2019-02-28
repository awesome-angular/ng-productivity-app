import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfilComponent } from './profil/profil.component';
import { ProfilRoutingModule } from './profil-routing.module';

@NgModule({
	declarations: [ProfilComponent],
	imports: [
		SharedModule,
		ProfilRoutingModule
	]
})
export class ProfilModule { }
