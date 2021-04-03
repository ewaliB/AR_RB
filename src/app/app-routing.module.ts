import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AboutComponent } from './about/about.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'view', component: ViewComponent },
  { path: 'add', component: AddComponent },
  { path: 'home', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
