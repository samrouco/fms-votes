import { Component, OnInit } from '@angular/core';
import { SharingService } from '../../services/SharingService';
import { ScoreModel } from 'src/app/models/score-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mc-selector',
  templateUrl: './mc-selector.component.html',
  styleUrls: ['./mc-selector.component.scss']
})
export class McSelectorComponent implements OnInit {

  scoreData: ScoreModel;

  constructor(
    private sharingService: SharingService,
    private router: Router
  ) {

  }


  acceptNames() {
    this.sharingService.setData(this.scoreData);
    this.router.navigate(['/Easy']);
  }

  ngOnInit() {
    this.scoreData = this.sharingService.getData();
  }

}
