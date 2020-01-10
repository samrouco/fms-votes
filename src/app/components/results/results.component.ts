import { Component, OnInit } from '@angular/core';
import { SharingService } from '../../services/SharingService';
import { ScoreModel } from 'src/app/models/score-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  scoreData: ScoreModel;

  constructor(
    private sharingService: SharingService,
    private router: Router
  ) {
    this.scoreData = sharingService.getData();
    if (this.scoreData.Mc1.name === undefined || this.scoreData.Mc2.name === undefined) {
      this.router.navigate(['/McSelector']);
    }
    this.scoreData.Mc1.calculateTotal();
    this.scoreData.Mc2.calculateTotal();
  }
  ngOnInit() {
  }

}
