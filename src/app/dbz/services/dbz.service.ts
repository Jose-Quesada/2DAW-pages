import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

import { v4 as uuid } from 'uuid';
import { AddCharacterComponent } from '../components/add-character/add-character.component';

@Injectable({providedIn: 'root'})
export class DbzService {


  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 10000,
    }
  ];

  constructor() { }

  addCharacter (character:Character):void{

    const newCharacter: Character = {
      id: uuid(),
      name: character.name,
      power: character.power,
    }

    this.characters.push(newCharacter);
  }

  onDeleteCharacter (id:number):void{
    this.characters.splice(id,1);
  }

  deleteCharacterById (id:string):void{
    this.characters = this.characters.filter ( character => character.id !== id);
  }

}
