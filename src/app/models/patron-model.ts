export class PatronModel {
  score: number;
  extra: boolean;

  constructor() {
    this.score = undefined;
    this.extra = false;
  }

  getTotalScore(): number {
    return +(this.extra ? parseInt(this.score.toString()) + 1 : this.score);
  }
}
