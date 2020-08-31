import { Component, OnInit } from '@angular/core';
import { BaseComponentComponent } from 'src/app/components/base-component/base-component.component';

@Component({
  selector: 'app-rc',
  templateUrl: './rc.component.html',
  styleUrls: ['./rc.component.scss']
})
export class RcComponent extends BaseComponentComponent implements OnInit {
}
