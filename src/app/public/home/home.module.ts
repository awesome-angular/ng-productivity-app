import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeFeatureCardComponent } from './home-feature-card/home-feature-card.component';
import { HomeFeaturesComponent } from './home-features/home-features.component';
import { HomeComponent } from './home/home.component';

@NgModule({
	declarations: [HomeBannerComponent, HomeFeatureCardComponent, HomeComponent, HomeFeaturesComponent],
	imports: [
		SharedModule
	]
})
export class HomeModule { }
