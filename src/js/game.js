import Character from './domain.js';

export default class Game {
  start() {
    console.log("game started");
  }
}

export class GameSavingData {}

export function readGameSaving() {
  console.log('readGameSaving done');
}

export function writeGameSaving() {
  console.log('writeGameSaving done');
}
