import { Component, OnInit } from '@angular/core';
import { ScoreModel } from 'src/app/models/score-model';
import { SharingService } from 'src/app/services/SharingService';
import { Router } from '@angular/router';
import { McModel } from 'src/app/models/mc-model';
import { EventEmitterService } from '../base/event-emmiter.service';
import * as NAMES from '../../constants';
@Component({
  selector: 'app-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.scss']
})
export class BaseComponentComponent implements OnInit {
  scoreData: ScoreModel;
  public CONSTANTS = NAMES;

  constructor(
    private sharingService: SharingService,
    private router: Router,
    private eventEmitterservice: EventEmitterService
  ) {
    this.scoreData = new ScoreModel();

  }

  ngOnInit() {
    this.eventEmitterservice.stopVideo();
  }

  public goToBattle(mc1: string, mc2: string, videoId: string) {

    this.scoreData.Mc1 = new McModel();
    this.scoreData.Mc2 = new McModel();

    this.scoreData.videoURL = videoId;
    this.scoreData.Mc1.name = mc1;
    this.scoreData.Mc2.name = mc2;

    this.sharingService.setData(this.scoreData);
    this.router.navigate(['/Easy']);
  }

  public goToMc(mc: string, introsCount: number, folder: string) {
    this.playAudio(mc, introsCount, folder);
    this.router.navigate(['/' + mc]);
  }

  playAudio(mcName: string, introsCount: number, folder: string): void{
    let audio = new Audio();
    audio.src = "../../../assets/sounds/"+folder+"/"+ mcName + "/" + mcName + "_intro" + this.getRandom(introsCount) + ".mp3";
    audio.load();
    audio.play();
  }

  getRandom(max: number){
    var value = parseInt(((Math.random() * 100) % max).toString());
    return value + 1;
  }
}
