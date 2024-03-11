import { King } from './king.ts';
import { Fighter } from './fighter.ts';
import { Adviser } from './advisor.ts';
import { Squire } from './squire.ts';

const characters = [
  new King('Joffrey', 'Baratheon', 18, true, 12),
  new Fighter('Jaime', 'Lannister', 35, true, 9, 'Golden Sword'),
  new Fighter('Daenerys', 'Targaryen', 25, true, 10, 'Dragones'),
  new Adviser('Tyrion', 'Lannister', 32, true, 'Jaime Lannister'),
  new Squire('Bronn', 'desconocida', 30, true, 'Daenerys Targaryen', 8),
];

export default characters;
