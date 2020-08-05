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
import { FmsMexComponent } from './components/fms-mex/fms-mex.component';
import { FmsPerComponent } from './components/fms-per/fms-per.component';
import { BoneComponent } from './components/fms-mex/gallos/bone/bone.component';
import { GarzaComponent } from './components/fms-mex/gallos/garza/garza.component';
import { JonybComponent } from './components/fms-mex/gallos/jonyb/jonyb.component';
import { LoboComponent } from './components/fms-mex/gallos/lobo/lobo.component';
import { PotenciaComponent } from './components/fms-mex/gallos/potencia/potencia.component';
import { RapderComponent } from './components/fms-mex/gallos/rapder/rapder.component';
import { RcComponent } from './components/fms-mex/gallos/rc/rc.component';
import { SkiperComponent } from './components/fms-mex/gallos/skiper/skiper.component';
import { YoikerComponent } from './components/fms-mex/gallos/yoiker/yoiker.component';
import { ZticmaComponent } from './components/fms-mex/gallos/zticma/zticma.component';
import { ChoqueComponent } from './components/fms-per/gallos/choque/choque.component';
import { JazeComponent } from './components/fms-per/gallos/jaze/jaze.component';
import { JotaComponent } from './components/fms-per/gallos/jota/jota.component';
import { LitzenComponent } from './components/fms-per/gallos/litzen/litzen.component';
import { NekroosComponent } from './components/fms-per/gallos/nekroos/nekroos.component';
import { NeweraComponent } from './components/fms-per/gallos/newera/newera.component';
import { RamsetComponent } from './components/fms-per/gallos/ramset/ramset.component';
import { SkillComponent } from './components/fms-per/gallos/skill/skill.component';
import { StickComponent } from './components/fms-per/gallos/stick/stick.component';
import { StrikeComponent } from './components/fms-per/gallos/strike/strike.component';



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
  {path: 'FmsMex' , component:FmsMexComponent},
  {path: 'Bone' , component:BoneComponent},
  {path: 'Garza' , component:GarzaComponent},
  {path: 'Jonyb' , component:JonybComponent},
  {path: 'Lobo' , component:LoboComponent},
  {path: 'Potencia' , component:PotenciaComponent},
  {path: 'Rapder' , component:RapderComponent},
  {path: 'Rc' , component:RcComponent},
  {path: 'Skiper' , component:SkiperComponent},
  {path: 'Yoiker' , component:YoikerComponent},
  {path: 'Zticma' , component:ZticmaComponent},
  {path: 'FmsPer' , component:FmsPerComponent},
  {path: 'Choque' , component:ChoqueComponent},
  {path: 'Jaze' , component:JazeComponent},
  {path: 'Jota' , component:JotaComponent},
  {path: 'Litzen' , component:LitzenComponent},
  {path: 'Nekroos', component:NekroosComponent},
  {path: 'Newera' , component:NeweraComponent},
  {path: 'Ramset' , component:RamsetComponent},
  {path: 'Skill' , component:SkillComponent},
  {path: 'Stick' , component:StickComponent},
  {path: 'Strike' , component:StrikeComponent},
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
