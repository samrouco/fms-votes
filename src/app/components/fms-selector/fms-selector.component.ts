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
    this.router.navigate(['/fmsArg'])
  }

  irfmsesp(){
    this.router.navigate(['/fmsEsp'])
  }

  irfmsmex(){
    this.router.navigate(['/fmsMex'])
  }

  irfmschi() {
    this.router.navigate(['/fmsChi'])
  }

  irfmsper(){
    this.router.navigate(['/fmsPer'])
  }

}
