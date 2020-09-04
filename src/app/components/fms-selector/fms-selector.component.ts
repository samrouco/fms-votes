import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fms-selector',
  templateUrl: './fms-selector.component.html',
  styleUrls: ['./fms-selector.component.scss']
})
export class FmsSelectorComponent implements OnInit {

  constructor(private router: Router) {
    
   }

  ngOnInit() {
  }

  irfmsarg(){
    this.router.navigate(['/FmsArg'])
  }

  irfmsesp(){
    this.router.navigate(['/FmsEsp'])
  }

  irfmsmex(){
    this.router.navigate(['/FmsMex'])
  }

  irfmschi() {
    this.router.navigate(['/FmsChi'])
  }

  irfmsper(){
    this.router.navigate(['/FmsPer'])
  }

}
