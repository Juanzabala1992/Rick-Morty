import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
{
  path: '',
  redirectTo:'home',  
  pathMatch: 'full' 
}, 
{
  path: 'home',
  component:HomeComponent,
}, 
{path: 'home', 
loadChildren: () => import('./components/pages/characterhome.module').then(m => m.CharacterhomeModule)}
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
