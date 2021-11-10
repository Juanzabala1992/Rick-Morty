import { NgModule } from '@angular/core';
import { CharacterComponent } from './character/character.component';
import { CharactersDetailsComponent } from './characters-details/characters-details.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { CharacterhomeRoutingModule } from './characterhome-routing.module';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    CharacterComponent,
    CharactersDetailsComponent,
    CharactersListComponent,
    HomeComponent,
       
  ],
  imports:[
    RouterModule,
    CharacterhomeRoutingModule,
    CommonModule,
    InfiniteScrollModule    
  ],
  exports:[
    CharacterComponent,
    CharactersDetailsComponent,
    CharactersListComponent,
    HomeComponent
  ]
})
export class CharacterhomeModule { }
