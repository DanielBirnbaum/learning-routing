import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AaaComponent } from './routr/aaa/aaa.component';
import { BbbComponent } from './routr/bbb/bbb.component';
import { DataComponent } from './routr/data/data.component';
import { UsersComponent } from './routr/users/users.component';
import { AaaService } from './guard/aaa.service';

const routes: Routes = [

  { path: '', redirectTo: 'bbb', pathMatch: 'full' },

  { path: 'aaa', component: AaaComponent, canActivate: [AaaService] },
  { path: 'bbb', component: BbbComponent },
  { path: 'user/:id', component: UsersComponent },
  { path: 'data', component: DataComponent, data: { ss: 'my data' } },

  { path: '**', redirectTo: 'bbb', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
