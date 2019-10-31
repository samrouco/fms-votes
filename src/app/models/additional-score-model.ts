export class AdditionalScoreModel {
  flow: number;
  skills: number;
  scene: number;

  getTotal(): number {
    return this.flow + this.skills + this.scene;
  }
}
