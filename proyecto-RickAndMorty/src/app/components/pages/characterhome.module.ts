import { NgModule } from '@angular/core';
import { CharacterComponent } from './character/character.component';
import { CharactersDetailsComponent } from './characters-details/characters-details.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    CharacterComponent,
    CharactersDetailsComponent,
    CharactersListComponent,
    HomeComponent
  ],
  exports:[
    CharacterComponent,
    CharactersDetailsComponent,
    CharactersListComponent,
    HomeComponent
  ]
})
export class CharacterhomeModule { }
