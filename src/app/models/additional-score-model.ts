export class AdditionalScoreModel {
  flow = 0;
  skills = 0;
  scene = 0;

  getTotal(): number {
    const result = this.flow + this.skills + this.scene;
    console.log(result !== undefined ? result : 0);
    return result !== undefined ? result : 0;
  }
}
