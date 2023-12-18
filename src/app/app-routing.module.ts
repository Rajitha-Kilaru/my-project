import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
	// { path: '' , redirectTo: 'home' , pathMatch: 'full' },
	{ path: 'home' , component: HomeComponent },
	{ path: 'info' , component: InfoComponent },
	{ path: 'services' , component: ServicesComponent },
	{ path: 'contact' , component: ContactComponent },
	{ path: 'profile' , component: ProfileComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
