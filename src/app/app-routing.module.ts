import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const role = JSON.parse(localStorage.getItem('roleRequest'));
const routes: Routes = [
  {
    path: 'panel',
    loadChildren: './panel/panel.module#PanelModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
