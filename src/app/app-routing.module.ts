import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component:HeroComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
