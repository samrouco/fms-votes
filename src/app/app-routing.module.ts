import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { McSelectorComponent } from './components/mc-selector/mc-selector.component';
import { EasyComponent } from './components/easy/easy.component';
import { HardComponent } from './components/hard/hard.component';
import { ThematicComponent } from './components/thematic/thematic.component';
import { CharactersComponent } from './components/characters/characters.component';
import { BloodComponent } from './components/blood/blood.component';
import { DeluxeComponent } from './components/deluxe/deluxe.component';
import { ResultsComponent } from './components/results/results.component';
import { FmsSelectorComponent } from './components/fms-selector/fms-selector.component';
import { FmsEspComponent } from './components/fms-esp/fms-esp.component';
import { BlonComponent } from './components/blon/blon.component';
import { BnetComponent } from './components/bnet/bnet.component';
import { ErreceComponent } from './components/errece/errece.component';
import { GazirComponent } from './components/gazir/gazir.component';
import { KhanComponent } from './components/khan/khan.component';
import { MnakComponent } from './components/mnak/mnak.component';
import { MregoComponent } from './components/mrego/mrego.component';
import { SweetpainComponent } from './components/sweetpain/sweetpain.component';
import { TirpaComponent } from './components/tirpa/tirpa.component';
import { ZaskoComponent } from './components/zasko/zasko.component';



const routes: Routes = [
  {path: 'FmsSelector', component: FmsSelectorComponent},
  {path: 'FmsEsp', component: FmsEspComponent},
  {path: 'Blon' , component: BlonComponent},
  {path: 'Bnet' , component: BnetComponent},
  {path: 'Errece', component: ErreceComponent},
  {path: 'Gazir' , component: GazirComponent},
  {path: 'Khan' , component: KhanComponent},
  {path: 'Mnak' , component: MnakComponent},
  {path: 'Mrego' , component: MregoComponent},
  {path: 'Sweetpain' , component: SweetpainComponent},
  {path: 'Tirpa' , component: TirpaComponent},
  {path: 'Zasko' , component: ZaskoComponent},
  {path: 'McSelector', component: McSelectorComponent},
  {path: 'Easy', component: EasyComponent},
  {path: 'Hard', component: HardComponent},
  {path: 'Thematic', component: ThematicComponent},
  {path: 'Characters', component: CharactersComponent},
  {path: 'Blood', component: BloodComponent},
  {path: 'Deluxe', component: DeluxeComponent},
  {path: 'Results', component: ResultsComponent},
  {path: '', component: FmsSelectorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
