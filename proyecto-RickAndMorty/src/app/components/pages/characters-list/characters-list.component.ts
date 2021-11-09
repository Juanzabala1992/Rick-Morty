import { Component, OnInit } from '@angular/core';
import { character } from 'src/app/shared/components/interface/character.interface';
import { CharacterService } from 'src/app/shared/services/character.service';
import {filter, take} from "rxjs/operators"
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

type ResquesInfo={
  next:string;
}
@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  characters:character[]=[
    {
      id:1,
      name:'',
      status:'',
      species:'',
      type:'',
      gender:'',
      origin:'',
      location:'',
      created:'',
      image:''
    }
  ];
  info: ResquesInfo={
    next:" ",
  };
  private pageNum=1;
  private query!: string;
  private hideScrollHeight=200;
  private showScrollHeight=500;
  constructor(private charatersvc:CharacterService, private route:ActivatedRoute, private router:Router) { 
    this.onUrlChange();
  }

  ngOnInit(): void {
/*     this.getDataFromService(); */
    this.getcharacters();
  }
  private getcharacters():void{
    this.route.queryParams.pipe(take(1)).subscribe((params: any)=>{
        console.log("Params =>",params )
        this.query=params['q'];
        this.getDataFromService();
      });

  }
  private onUrlChange():void{
    this.router.events.pipe(filter((event)=>event instanceof NavigationEnd)).subscribe(
      ()=>{
        this.characters=[];
        this.pageNum=1;
        this.getcharacters();
      }
    )
  }
  private getDataFromService():void{ 
    this.charatersvc.searchCharacters(this.query , this.pageNum)    
    .pipe(take(1))
    .subscribe((res:any)=>{
      if(res?.results.length){
        const {info, results}=res;
        this.characters=[...this.characters, ...results];
        this.info=info; 
      }else{
        this.characters=[];
      }
  
     })
  }
}
