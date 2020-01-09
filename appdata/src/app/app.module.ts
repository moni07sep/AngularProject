import { HeartLikeComponent } from './HeartLikeComponent';
import { laptopData } from './laptopData';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { listDisplayComponemt } from './listDisplay.component';
import { laptopDisplayComponemt } from './laptopDisplay.component';
import { listData } from './listData';
import { profileComponent } from './profile.component';
import { HeartComponent } from './heart.component';
import { AddDetailsComponent } from './AddDetails.component';
import { DetailsComponent } from './Details.component';
import { PropertyComponent } from './property.component';
import { MobileComponent } from './Mobile.component';
import { AllComponent } from 'src/all.component';
import { TVComponent } from 'src/TV.component';
import { LaptopComponent } from 'e2e/src/Laptop.component';
import { ddComponent } from 'src/dd.component';
import { UserComponent } from 'src/user.component';
import { searchComponent } from "./searchComponent";
import {FormsModule ,ReactiveFormsModule } from "@angular/forms";
import { searchpipe } from './search.pipe';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    listDisplayComponemt,
    profileComponent,
    HeartComponent,
    HeartLikeComponent,
    AddDetailsComponent,
    DetailsComponent,
    PropertyComponent,
    MobileComponent,
    AllComponent,
    TVComponent,
    LaptopComponent,
    ddComponent,
    UserComponent,
    searchComponent,
    searchpipe,
    TemplateComponent,
    ReactiveComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    NavigationComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
    
    
  ],
  providers: [listData,laptopData],
  bootstrap: [AppComponent]
})
export class AppModule { }
