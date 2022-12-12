import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlansafeComponent } from './Pages/plansafe/plansafe.component';
import { HomeComponent } from './Pages/home/home.component';


const routes: Routes = [
  {
    component: PlansafeComponent,
    path: 'plansafe'
  },
  {
    component: HomeComponent,
    path: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
