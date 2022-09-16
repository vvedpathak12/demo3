import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { StaffComponent } from './staff/staff.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    StaffComponent,
    AboutusComponent,
    DetailsComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
