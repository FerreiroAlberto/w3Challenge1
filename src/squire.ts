import { Character } from './character.js';

export class Squire extends Character {
  knight: string;
  servilism: number;
  constructor(
    name: string,
    family: string,
    age: number,
    alive: boolean,
    knight: string,
    servilism: number
  ) {
    super(name, family, age, alive);
    this.knight = knight;
    this.servilism = servilism;
  }

  talk() {
    return 'Soy un loser';
  }
}
