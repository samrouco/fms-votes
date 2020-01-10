import { Component, OnInit } from '@angular/core';
import { SharingService } from 'src/app/services/SharingService';
import { Router } from '@angular/router';
import { ScoreModel } from 'src/app/models/score-model';

@Component({
  selector: 'app-thematic',
  templateUrl: './thematic.component.html',
  styleUrls: ['./thematic.component.scss']
})
export class ThematicComponent implements OnInit {

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

  navigateToCharacters() {
    this.sharingService.setData(this.scoreData);
    this.router.navigate(['/Characters']);
  }

  ngOnInit() {
  }
}
