import { RoundModel } from './round-model';

export class McModel {
  name: string;
  easyMode: RoundModel;
  hardMode: RoundModel;
  thematic1: RoundModel;
  thematic2: RoundModel;
  characters: RoundModel;
  blood1: RoundModel;
  blood2: RoundModel;
  deluxe: RoundModel;
  result: number;

  constructor() {
    this.easyMode = new RoundModel(6);
    this.hardMode = new RoundModel(6);
    this.thematic1 = new RoundModel(4);
    this.thematic2 = new RoundModel(4);
    this.characters = new RoundModel(6);
    this.blood1 = new RoundModel(6);
    this.blood2 = new RoundModel(6);
    this.deluxe = new RoundModel(11);
  }

  calculateTotal() {
    this.result = +(this.easyMode.getRoundScore() + this.hardMode.getRoundScore() +
      this.thematic1.getRoundScore() + this.thematic2.getRoundScore() + this.characters.getRoundScore() + this.blood1.getRoundScore() +
      this.blood2.getRoundScore() + this.deluxe.getRoundScore());
  }
}
