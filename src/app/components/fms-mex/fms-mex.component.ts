import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fms-mex',
  templateUrl: './fms-mex.component.html',
  styleUrls: ['./fms-mex.component.scss']
})
export class FmsMexComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irlobo() {
    this.router.navigate(['/Lobo'])
  }

  irbone() {
    this.router.navigate(['/Bone'])
  }

  irjonyb() {
    this.router.navigate(['/Jonyb'])
  }

  irgarza() {
    this.router.navigate(['/Garza'])
  }

  irrc() {
    this.router.navigate(['/Rc'])
  }

  irpotencia() {
    this.router.navigate(['/Potencia'])
  }

  iryoiker() {
    this.router.navigate(['/Yoiker'])
  }

  irzticma() {
    this.router.navigate(['/Zticma'])
  }

  irrapder() {
    this.router.navigate(['/Rapder'])
  }

  irskiper() {
    this.router.navigate(['/Skiper'])
  }





}
