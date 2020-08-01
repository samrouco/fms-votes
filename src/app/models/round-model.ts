import { AdditionalScoreModel } from './additional-score-model';
import { PatronModel } from './patron-model';

export class RoundModel {

  constructor(patronNumber: number) {
    this.patrons = new Array(patronNumber);
    for (let i = 0; i < patronNumber; i++) {
      this.patrons[i] = new PatronModel();
    }
    this.extraScore = new AdditionalScoreModel();
  }

  patrons: PatronModel[];
  extraScore: AdditionalScoreModel;

  getRoundScore(): number {
    let result = 0;
    this.patrons.forEach( patron => {

      if (patron.score !== undefined && patron.getTotalScore !== undefined) {
        result += parseInt(patron.getTotalScore().toString());
      }
    } );

    if(this.extraScore !== undefined && this.extraScore.getTotal !== undefined)
    result += +(this.extraScore.getTotal());
    return result;
  }
}
