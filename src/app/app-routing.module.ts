
import { SecondComponentComponent } from './second-component/second-component.component';
import { FirstComponentComponent } from './first-component/first-component.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 

const routes: Routes = [ 
  {path: '', pathMatch: 'full', redirectTo: 'first'},
  {path: 'first', component: FirstComponentComponent},
  {path: 'second', component: SecondComponentComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [FirstComponentComponent, SecondComponentComponent]
