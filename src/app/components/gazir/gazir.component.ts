import { Component, OnInit } from '@angular/core';
import { SharingService } from 'src/app/services/SharingService';
import { Router } from '@angular/router';
import { ScoreModel } from 'src/app/models/score-model';
import { McModel } from 'src/app/models/mc-model';
import { EventEmitterService } from '../base/event-emmiter.service';

@Component({
  selector: 'app-gazir',
  templateUrl: './gazir.component.html',
  styleUrls: ['./gazir.component.scss']
})
export class GazirComponent implements OnInit {

  scoreData: ScoreModel;

  constructor(
    private sharingService: SharingService,
    private router: Router,
    private eventEmitterservice: EventEmitterService
  ) {
    this.scoreData = new ScoreModel();
  }

  ngOnInit() {
    console.log("gazir on init");
    this.eventEmitterservice.stopVideo();
  }

  goToZaskoVsGazir(): void{
    this.scoreData.Mc1 = new McModel();
    this.scoreData.Mc2 = new McModel();

    this.scoreData.videoURL = "DrT-exaAbEk";

    this.scoreData.Mc1.name = "Zasko";
    this.scoreData.Mc2.name = "Gazir";
    this.sharingService.setData(this.scoreData);
    console.log("Vamos");
    this.router.navigate(['/Easy']);
  }
}
