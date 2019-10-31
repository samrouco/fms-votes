import { Component, OnInit, Directive, NgModule } from '@angular/core';
import { SharingService } from '../../services/SharingService';
import { ScoreModel } from 'src/app/models/score-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-easy',
  templateUrl: './easy.component.html',
  styleUrls: ['./easy.component.scss']
})

export class EasyComponent
  implements OnInit {

  scoreData: ScoreModel;

  constructor(
    private sharingService: SharingService,
    private router: Router
  ) {
    this.scoreData = sharingService.getData();
    if (this.scoreData.Mc1.name === undefined || this.scoreData.Mc2.name === undefined) {
      this.router.navigate(['/McSelector']);
    }
  }


  navigateToHardMode() {
    this.sharingService.setData(this.scoreData);
    this.router.navigate(['/Hard']);
  }

  ngOnInit() {
  }

}
