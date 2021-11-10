import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersDetailsComponent } from './characters-details/characters-details.component';
import { CharacterComponent } from './character/character.component';
import { ChaptersComponent } from './chapters/chapters.component';

const routes: Routes = [

  {path:'',
  children:[
    {path:'character', component:CharacterComponent},
    {path:'character-list', component:CharactersListComponent},
    {path:'character-details', component:CharactersDetailsComponent},
    {path:'character-details/:id', component:CharactersDetailsComponent},
    {path:'chapters', component:ChaptersComponent}
  ]
}

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {useHash:true}),
    CommonModule],
  exports: [RouterModule],
  

})
export class CharacterhomeRoutingModule { }
