import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component'; 
import { CreateComponent } from './create/create.component';
import { RegisterComponent } from './user-login/register/register.component';
//import { PersonalComponent } from './forms/personal/personal.component';
import { ProfileComponent } from './user-login/profile/profile.component'
import { EditContactComponent } from './edit/edit-contact.component';
import { HomeComponent } from './user-login/home/home.component';
//import { RegisterComponent } from './user-login/register/register.component';
import { LoginComponent } from './user-login/login/login.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component'


const routes: Routes = [
    { path:  '', redirectTo:  'home', pathMatch:  'full' },
{
    path:  'details',
    component:  DetailsComponent  , canActivate: [AuthGuardService]  
},
{
    path:  'create',
    component:  CreateComponent
}
,
{
    path:  'edit-details/:Id',
    component:  EditContactComponent
}
,
{
    path:  'register',
    component:  RegisterComponent
}
,
{
    path:  'profile',
    component:  ProfileComponent
},
{
    path:  'home',
    component:  HomeComponent
},
{
    path:  'login',
    component:  LoginComponent
},
{
    path:  'empDetails',
    component:  EmployeeDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
