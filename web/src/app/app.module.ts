import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatRadioButton,
  MatCardModule,
  
  
  MatFormFieldModule } from "@angular/material";
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import {MatStepperModule} from '@angular/material/stepper';
  import {MatListModule} from '@angular/material/list';

  import {MatRadioModule} from '@angular/material/radio';
import { ToggleButtonComponent } from './toggle-button.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

  
 // import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { APIService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component'; 
import {AppRoutingModule} from  './app-routing.module';
import { CreateComponent } from './create/create.component';


import { EditContactComponent } from './edit/edit-contact.component';

import { NavbarComponent } from './navbar/navbar.component';
import { FormFooterComponent } from './form-footer/form-footer.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { HomeComponent } from './user-login/home/home.component';
import { RegisterComponent } from './user-login/register/register.component';
import { LoginComponent } from './user-login/login/login.component';
import { ProfileComponent } from './user-login/profile/profile.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component'
import { OfficeService } from './service/office.service';
import { CreateClientComponent } from './client/create-client/create-client.component';
import { GetClientComponent } from './client/get-client/get-client.component';
import { EditClientComponent } from './client/edit-client/edit-client.component';

//import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    CreateComponent,

    EditContactComponent,
    
    NavbarComponent,
    ToggleButtonComponent,
    FormFooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    EmployeeDetailsComponent,
    CreateClientComponent,
    GetClientComponent,
    EditClientComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatStepperModule,
    MatListModule,
    MatRadioModule,
    MatDialogModule,
    MatTooltipModule
  
   
   
  ],
  providers: [APIService, AuthenticationService, 
    AuthGuardService, OfficeService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
