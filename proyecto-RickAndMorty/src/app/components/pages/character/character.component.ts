import { Component, Input, OnInit } from '@angular/core';
import { character } from 'src/app/shared/components/interface/character.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  @Input () character!:character;
  constructor() { }

  ngOnInit(): void {
  }

}
