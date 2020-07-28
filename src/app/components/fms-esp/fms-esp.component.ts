import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fms-esp',
  templateUrl: './fms-esp.component.html',
  styleUrls: ['./fms-esp.component.scss']
})
export class FmsEspComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irblon(){
    this.router.navigate(['/Blon'])
  }

  irgazir(){
    this.router.navigate(['/Gazir'])
  }

  irkhan(){
    this.router.navigate(['/Khan'])
  }

  irmnak(){
    this.router.navigate(['/Mnak'])
  }

  irmrego(){
    this.router.navigate(['/Mrego'])
  }

  irerrece(){
    this.router.navigate(['/Errece'])
  }

  irtirpa(){
    this.router.navigate(['/Tirpa'])
  }

  irbnet(){
    this.router.navigate(['/Bnet'])
  }

  irzasko(){
    this.router.navigate(['/Zasko'])
  }

  irsweetpain(){
    this.router.navigate(['/Sweetpain'])
  }

}
