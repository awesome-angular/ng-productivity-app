import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../../../environments/environment';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAuthModule,
		AngularFirestoreModule,
		AngularFireStorageModule
	],
	exports: [
		AngularFireModule,
		AngularFireAuthModule,
		AngularFirestoreModule,
		AngularFireStorageModule
	]
})
export class FirebaseModule { }
