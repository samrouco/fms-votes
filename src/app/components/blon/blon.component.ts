import { Component, OnInit } from '@angular/core';
import { SharingService } from '../../services/SharingService';
import { ScoreModel } from 'src/app/models/score-model';
import { Router } from '@angular/router';
import { McModel } from 'src/app/models/mc-model';
import { BaseComponentComponent } from '../base-component/base-component.component';

@Component({
  selector: 'app-blon',
  templateUrl: './blon.component.html',
  styleUrls: ['./blon.component.scss']
})
export class BlonComponent  extends BaseComponentComponent implements OnInit{

}
