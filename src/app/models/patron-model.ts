export class PatronModel {
  score: string;
  extra: boolean;

  constructor() {
    this.score = undefined;
    this.extra = false;
  }

  getTotalScore(): number {
    return +(this.extra ? parseFloat(this.score.toString()) + 1 : this.score);
  }
}
