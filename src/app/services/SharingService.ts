import { Injectable } from '@angular/core';
import { ScoreModel } from '../models/score-model';

@Injectable()
export class SharingService {
  private data: ScoreModel = undefined;

  setData(data: ScoreModel) {
    this.data = data;
  }

  getData(): ScoreModel {
    if (this.data === undefined) {
      this.data = new ScoreModel();
    }
    return this.data;
  }
}
