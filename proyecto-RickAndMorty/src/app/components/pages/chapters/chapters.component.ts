import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { capitulosDTO, personajesDTO } from 'src/app/shared/components/interface/character.interface';
import { CharacterService } from 'src/app/shared/services/character.service';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.scss']
})
export class ChaptersComponent implements OnInit {

  listaCapitulos: capitulosDTO[] = [];
  url!:string;
 
  constructor( private appiCapitulos: CharacterService, 
    private router : Router) { 
    this.appiCapitulos.getDataCapitulos()
      .subscribe(( dataCapitulos: any ) =>{
      this.listaCapitulos = dataCapitulos.results;
      this.setNameUrlPersonajes(); 
    });
  }

  setNameUrlPersonajes(){
    for ( let i = 0; i < this.listaCapitulos.length; i++ ) {
      const dataNamePersonajes = this.listaCapitulos[i];
      let  urlPersonajes = dataNamePersonajes.characters
      dataNamePersonajes.personajes = [];

      for (let j = 0; j < urlPersonajes.length; j++) {
        const urli = urlPersonajes[j];
        let personaje = { url:urli,name:"" };

          this.appiCapitulos.getUrlListadoPersonajes( urli )
          .subscribe(( result:any )=> {
            personaje.name = result.name;
          });
          dataNamePersonajes.personajes.push( personaje );
      }
    }
  }

 // metodo para filtar busqueda en el buscador para caítulos

  setUrlSearchCapitulos( termino: string ){
    this.appiCapitulos.getFilterPersonajes( termino )
      .subscribe( ( data: any ) => {
        this.listaCapitulos = data.results;
        this.setNameUrlPersonajes();
      });    
  } 

  verCapitulos( item : personajesDTO ){
    let url=item.url;
    this.router.navigate(['/personaje',url.split('/')[5]]);
  }
  ngOnInit(): void {
  }
  goback(){
    window.history.back();
  }
}
