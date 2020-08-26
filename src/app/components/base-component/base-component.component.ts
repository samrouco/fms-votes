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
}
