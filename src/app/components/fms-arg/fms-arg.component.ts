import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fms-arg',
  templateUrl: './fms-arg.component.html',
  styleUrls: ['./fms-arg.component.scss']
})
export class FmsArgComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ircacha() {
    this.router.navigate(['/Cacha'])
  }

  irklan() {
    this.router.navigate(['/Klan'])
  }

  irdtoke() {
    this.router.navigate(['/Dtoke'])
  }

  irmecha() {
    this.router.navigate(['/Mecha'])
  }

  irpapo() {
    this.router.navigate(['/Papo'])
  }

  irmks() {
    this.router.navigate(['/Mks'])
  }

  irstuart() {
    this.router.navigate(['/Stuart'])
  }

  irsub() {
    this.router.navigate(['/Sub'])
  }

  irnacho() {
    this.router.navigate(['/Nacho'])
  }

  irwolf() {
    this.router.navigate(['/Wolf'])
  }

}
