import { McModel } from './mc-model';

export class ScoreModel {
  Mc1: McModel;
  Mc2: McModel;
  videoURL: string;

  constructor() {
    this.Mc1 = new McModel();
    this.Mc2 = new McModel();

  }
}
