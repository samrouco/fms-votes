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

  irblon() {
    this.playAudio("blon", 3)
    this.router.navigate(['/Blon'])
  }

  irgazir() {
    this.router.navigate(['/Gazir'])
  }

  irkhan() {
    this.router.navigate(['/Khan'])
  }

  irmnak() {
    this.router.navigate(['/Mnak'])
  }

  irmrego() {
    this.router.navigate(['/Mrego'])
  }

  irerrece() {
    this.router.navigate(['/Errece'])
  }

  irtirpa() {
    this.router.navigate(['/Tirpa'])
  }

  irbnet() {
    this.playAudio("bnet", 1)
    this.router.navigate(['/Bnet'])
  }

  irzasko() {
    this.router.navigate(['/Zasko'])
  }

  irsweetpain() {
    this.router.navigate(['/Sweetpain'])
  }

  playAudio(mcName: string, numeroRimas: number): void{
    let audio = new Audio();
    audio.src = "../../../assets/sounds/spain/"+ mcName + "/" + mcName + "_intro" + this.getRandom(numeroRimas) + ".mp3";
    audio.load();
    audio.play();
  }

  getRandom(max: number){
    var value = parseInt(((Math.random() * 100) % max).toString());
    return value + 1;
  }

}
