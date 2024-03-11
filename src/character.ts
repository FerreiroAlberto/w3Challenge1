export class Character {
  name: string;
  family: string;
  age: number;
  alive: boolean;
  static series = 'Juego de tronos';
  constructor(name: string, family: string, age: number, alive: boolean) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.alive = true;
  }
  talk() {
    return '';
  }
  die() {
    this.alive = false;
  }
}
