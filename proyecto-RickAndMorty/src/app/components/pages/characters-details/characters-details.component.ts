import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { character } from 'src/app/shared/components/interface/character.interface';
import { CharacterService } from 'src/app/shared/services/character.service';


@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.scss']
})
export class CharactersDetailsComponent implements OnInit {
  characters$!: Observable<character>;
;
  constructor(private route:ActivatedRoute, private characterSrv:CharacterService) { }

  ngOnInit(): void {
    console.log('this.character ',this.characters$)
    this.route.params.pipe(take(1)).subscribe((params)=>{
      const id= params['id'];
      this.characters$=this.characterSrv.getDeatils(id);
    });
  }
  goback(){
    window.history.back();
  }
}
