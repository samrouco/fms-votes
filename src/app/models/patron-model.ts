export class PatronModel {
  score: number;
  extra: boolean;

  constructor() {
    this.score = undefined;
    this.extra = false;
  }

  getTotalScore(): number {
    return this.extra ? this.score + 1 : this.score;
  }
}
