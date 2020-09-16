import { Component, OnInit, Directive, NgModule } from '@angular/core';
import { SharingService } from '../../services/SharingService';
import { ScoreModel } from 'src/app/models/score-model';
import { Router } from '@angular/router';
import { HAMMER_LOADER } from '@angular/platform-browser';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { EventEmitterService } from '../../services/event-emmiter.service';

@Component({
  selector: 'app-easy',
  templateUrl: './easy.component.html',
  styleUrls: ['./easy.component.scss']
})

export class EasyComponent
  implements OnInit {

    foo: Function;

  scoreData: ScoreModel;

  constructor(
    private sharingService: SharingService,
    private router: Router,
    private eventEmitter: EventEmitterService
  ) {
    this.scoreData = sharingService.getData();
    if (this.scoreData.Mc1.name === undefined || this.scoreData.Mc2.name === undefined) {
      this.router.navigate(['/McSelector']);
    }else{
      console.log("GOOO");
      this.eventEmitter.loadVideo(this.scoreData.videoURL);
    }
  }


  navigateToHardMode() {
    console.log(this.scoreData);
    this.sharingService.setData(this.scoreData);
    this.router.navigate(['/Hard']);
  }

  ngOnInit() {

  }

}
