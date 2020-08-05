import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fms-per',
  templateUrl: './fms-per.component.html',
  styleUrls: ['./fms-per.component.scss']
})
export class FmsPerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irjota() {
    this.router.navigate(['/Jota'])
  }

  irskill() {
    this.router.navigate(['/Skill'])
  }

  irjaze() {
    this.router.navigate(['/Jaze'])
  }

  irlitzen() {
    this.router.navigate(['/Litzen'])
  }

  irnekroos() {
    this.router.navigate(['/Nekroos'])
  }

  irnewera() {
    this.router.navigate(['/Newera'])
  }

  irramset() {
    this.router.navigate(['/Ramset'])
  }

  irstick() {
    this.router.navigate(['/Stick'])
  }

  irchoque() {
    this.router.navigate(['/Choque'])
  }

  irstrike() {
    this.router.navigate(['/Strike'])
  }
}
