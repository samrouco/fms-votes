import { Component, OnInit } from '@angular/core';
import { SharingService } from '../../services/SharingService';
import { ScoreModel } from 'src/app/models/score-model';
import { Router } from '@angular/router';
import { McModel } from 'src/app/models/mc-model';

@Component({
  selector: 'app-blon',
  templateUrl: './blon.component.html',
  styleUrls: ['./blon.component.scss']
})
export class BlonComponent implements OnInit {

  scoreData: ScoreModel;

  constructor(
    private sharingService: SharingService,
    private router: Router
  ) {
    this.scoreData = new ScoreModel();
  }

  ngOnInit() {
  }

  goToSPvsBlon(): void{
    this.scoreData.Mc1 = new McModel();
    this.scoreData.Mc2 = new McModel();

    this.scoreData.videoURL = "lc5-dUqm7j4";

    this.scoreData.Mc1.name = "Sweet Pain";
    this.scoreData.Mc2.name = "Blon";
    this.sharingService.setData(this.scoreData);

    console.log("Lets go pa lla");
    this.router.navigate(['/Easy']);
  }
}
