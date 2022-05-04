import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SurveyFormComponent } from './survey-form/survey-form.component';
import { CheckListComponent } from './check-list/check-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'survey-form',
    component: SurveyFormComponent
  } ,
  {
    path:'',
    component: HomeComponent
  } ,
  {
    path:'check-list',
    component: CheckListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

