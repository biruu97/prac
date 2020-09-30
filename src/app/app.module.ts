import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FeaturesComponent } from './features/features.component';
import { DocumentsComponent } from './documents/documents.component';
import { UserLoginRegisterComponent } from './user-login-register/user-login-register.component';
import { UserService } from './services/UserService';
import { LoanTrackerComponent } from './loan-tracker/loan-tracker.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';
import { LoanTrackService } from './services/LoanTrackService';
import { StoreDataService } from './services/StoreDataService';
import { UserHomeComponent } from './user-home/user-home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ShowPreviousHistoriesforUserComponent } from './show-previous-historiesfor-user/show-previous-historiesfor-user.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { IncomeDetailsComponent } from './income-details/income-details.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { DocUploadComponent } from './doc-upload/doc-upload.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AcknowledgementPageComponent } from './acknowledgement-page/acknowledgement-page.component';


var myRoutes:Routes=[
  {path:'',component:HomePageComponent},
  {path:'userhome',component:UserHomeComponent},
  {path:'features',component:FeaturesComponent},
  {path:'adminlogin',component:AdminLoginComponent},
  {path:'personaldetails',component:PersonalDetailsComponent},
  {path:'incomedetails',component:IncomeDetailsComponent},
  {path:'ack',component:AcknowledgementPageComponent},
  {path:'forgot',component:ForgotPasswordComponent},
  {path:'loandetails',component:LoanDetailsComponent},
  {path:'adminhome',component:AdminHomeComponent},
  {path:'bankdetails',component:BankDetailsComponent},
  {path:'loantrack',component:LoanTrackerComponent},
  {path:'docupload',component:DocUploadComponent},
  {path:'calculator',component:CalculatorComponent},
  {path:'faq',component:FaqComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'documents',component:DocumentsComponent},
  {path:'userlogreg',component:UserLoginRegisterComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'*',component:HomePageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FeaturesComponent,
    DocumentsComponent,
    UserLoginRegisterComponent,
    LoanTrackerComponent,
    AboutUsComponent,
    ContactUsComponent,
    FaqComponent,
    UserHomeComponent,
    CalculatorComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    ShowPreviousHistoriesforUserComponent,
    PersonalDetailsComponent,
    IncomeDetailsComponent,
    LoanDetailsComponent,
    DocUploadComponent,
    BankDetailsComponent,
    ForgotPasswordComponent,
    AcknowledgementPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [UserService,LoanTrackService,StoreDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
