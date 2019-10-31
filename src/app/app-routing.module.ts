import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { McSelectorComponent } from './components/mc-selector/mc-selector.component';
import { EasyComponent } from './components/easy/easy.component';
import { HardComponent } from './components/hard/hard.component';


const routes: Routes = [
  {path: 'McSelector', component: McSelectorComponent},
  {path: 'Easy', component: EasyComponent},
  {path: 'Hard', component: HardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
