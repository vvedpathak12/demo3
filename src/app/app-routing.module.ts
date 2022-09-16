import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { StaffComponent } from './staff/staff.component';
import { StudentComponent } from './student/student.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path: 'home' , component:HomeComponent},
  {path: 'student' , component:StudentComponent},
  {path: 'details' , component:DetailsComponent},
  {path:'update' , component:UpdateComponent},
  {path : 'staff' , component:StaffComponent},
  {path : 'aboutus' , component:AboutusComponent},
  {path : '**' , redirectTo:'home'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
