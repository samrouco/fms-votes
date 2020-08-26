import { Component, OnInit } from '@angular/core';
import { SharingService } from 'src/app/services/SharingService';
import { Router } from '@angular/router';
import { ScoreModel } from 'src/app/models/score-model';
import { McModel } from 'src/app/models/mc-model';
import { EventEmitterService } from '../base/event-emmiter.service';
import { BaseComponentComponent } from '../base-component/base-component.component';

@Component({
  selector: 'app-gazir',
  templateUrl: './gazir.component.html',
  styleUrls: ['./gazir.component.scss']
})
export class GazirComponent extends BaseComponentComponent implements OnInit {

}
