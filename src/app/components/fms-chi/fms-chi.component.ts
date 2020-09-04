import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fms-chi',
  templateUrl: './fms-chi.component.html',
  styleUrls: ['./fms-chi.component.scss']
})
export class FmsChiComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irteorema() {
    this.router.navigate(['/Teorema'])
  }

  iresezeta() {
    this.router.navigate(['/Esezeta'])
  }

  irelmenor() {
    this.router.navigate(['/Elmenor'])
  }

  irjokker() {
    this.router.navigate(['/Jokker'])
  }

  iracertijo() {
    this.router.navigate(['/Acertijo'])
  }

  irnitro() {
    this.router.navigate(['/Nitro'])
  }

  irjoqerr() {
    this.router.navigate(['/Joqerr'])
  }

  irpepegrillo() {
    this.router.navigate(['/Pepegrillo'])
  }

  irricto() {
    this.router.navigate(['/Ricto'])
  }

  irtomcrowley() {
    this.router.navigate(['/Tomcrowley'])
  }
}
