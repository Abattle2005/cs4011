import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeListComponent } from './home-list/home-list.component';
import { AboutComponent } from './about/about.component';
import { DetailsPageComponent } from './details-page/details-page.component';

export const routes: Routes = [
    { path: '', component: HomeListComponent},
    { path: 'about', component: AboutComponent},
    { path: 'location/:locationId', component: DetailsPageComponent},
];
