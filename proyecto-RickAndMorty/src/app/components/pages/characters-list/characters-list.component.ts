import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { character } from 'src/app/shared/components/interface/character.interface';
import { CharacterService } from 'src/app/shared/services/character.service';
import {filter, take} from "rxjs/operators"
import { DOCUMENT } from '@angular/common';
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
  reset:number=0;
  var:number=0;
  position:number=4;
  private pageNum=1;
  private query!: string;
  showButton=false;
  constructor(
    @Inject(DOCUMENT) private document:Document, 
    private charatersvc:CharacterService, 
    private route:ActivatedRoute, private router:Router
    
    ) { 
    this.onUrlChange();
  }

  ngOnInit(): void {
/*     this.getDataFromService(); */
    this.getcharacters();
  }
  private getcharacters():void{
    this.route.queryParams.pipe(take(1)).subscribe((params: any)=>{
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
  
  ScrollDown(event: any):void{      
      this.var=event.currentScrollPosition/1000;  
      if(this.var>=this.position){        
        this.position=this.position+2;
        this.pageNum++;
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
      
         });

      }
  }
/*   @HostListener('window:scroll')  
  ScrollUP():void{
    const yOffSet= window.pageYOffset;
    const scrollTop=this.document.documentElement.scrollTop;
    this.showButton=(yOffSet || scrollTop)>500;
    console.log("Hey");
  } */
}
