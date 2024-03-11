import { Character } from './character.js';

export class Fighter extends Character {
  weapon: string;
  skill: number;
  constructor(
    name: string,
    family: string,
    age: number,
    alive: boolean,
    skill: number,
    weapon: string
  ) {
    super(name, family, age, alive);
    this.weapon = weapon;
    this.skill = skill;
  }

  talk() {
    return 'Primero pego y luego pregunto';
  }
}
