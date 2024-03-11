import { Character } from './character.js';

export class Adviser extends Character {
  lord: string;
  constructor(
    name: string,
    family: string,
    age: number,
    alive: boolean,
    lord: string
  ) {
    super(name, family, age, alive);
    this.lord = lord;
  }

  talk() {
    return 'No sé por qué, pero creo que voy a morir pronto';
  }
}
