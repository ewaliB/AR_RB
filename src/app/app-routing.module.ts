import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add-modify/add.component';
import { ModifyComponent } from './add-modify/modify.component';
import { AboutComponent } from './about/about.component';
import { ViewComponent } from './view/view.component';
import { BulkComponent } from './bulk/bulk.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'view', component: ViewComponent },
  { path: 'add', component: AddComponent },
  { path: 'home', component: AboutComponent },
  { path: 'modify/:id', component: ModifyComponent },
  { path: 'view/:editable', component: ViewComponent },
  { path: 'bulk', component: BulkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
