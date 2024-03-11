import { Character } from './character.js';

export class King extends Character {
  reign: number;
  constructor(
    name: string,
    family: string,
    age: number,
    alive: boolean,
    reign: number
  ) {
    super(name, family, age, alive);
    this.reign = reign;
  }

  talk() {
    return 'Vais a morir todos';
  }
}
