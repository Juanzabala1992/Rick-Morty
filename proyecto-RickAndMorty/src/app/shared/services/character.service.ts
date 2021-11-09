import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { character } from '../components/interface/character.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http:HttpClient) { }
  searchCharacters(query="", page=1){
    return this.http.get<character[]>(`${environment.baseURLAPI}/?name=${query}&page=${page}`);
   }
  getDeatils(id:number){
    return this.http.get<character>(`${environment.baseURLAPI}/${id}`);    
  }
}
