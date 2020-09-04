import { NgModule, Component } from '@angular/core';
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
import { CachaComponent } from './components/fms-arg/cacha/cacha.component';
import { DtokeComponent } from './components/fms-arg/dtoke/dtoke.component';
import { KlanComponent } from './components/fms-arg/klan/klan.component';
import { MechaComponent } from './components/fms-arg/mecha/mecha.component';
import { MksComponent } from './components/fms-arg/mks/mks.component';
import { NachoComponent } from './components/fms-arg/nacho/nacho.component';
import { PapoComponent } from './components/fms-arg/papo/papo.component';
import { StuartComponent } from './components/fms-arg/stuart/stuart.component';
import { SubComponent } from './components/fms-arg/sub/sub.component';
import { WolfComponent } from './components/fms-arg/wolf/wolf.component';
import { FmsArgComponent } from './components/fms-arg/fms-arg.component';
import { FmsChiComponent } from './components/fms-chi/fms-chi.component';
import { AcertijoComponent } from './components/fms-chi/acertijo/acertijo.component';
import { ElmenorComponent } from './components/fms-chi/elmenor/elmenor.component';
import { EsezetaComponent } from './components/fms-chi/esezeta/esezeta.component';
import { JokkerComponent } from './components/fms-chi/jokker/jokker.component';
import { JoqerrComponent } from './components/fms-chi/joqerr/joqerr.component';
import { NitroComponent } from './components/fms-chi/nitro/nitro.component';
import { PepegrilloComponent } from './components/fms-chi/pepegrillo/pepegrillo.component';
import { RictoComponent } from './components/fms-chi/ricto/ricto.component';
import { TeoremaComponent } from './components/fms-chi/teorema/teorema.component';
import { TomcrowleyComponent } from './components/fms-chi/tomcrowley/tomcrowley.component';



const routes: Routes = [
  {path: 'FmsSelector', component: FmsSelectorComponent},
  {path: 'FmsArg' , component: FmsArgComponent},
  {path: 'Cacha' , component: CachaComponent},
  {path: 'Dtoke' , component: DtokeComponent},  
  {path: 'Klan' , component: KlanComponent},
  {path: 'Mecha' , component: MechaComponent},
  {path: 'Mks' , component: MksComponent},
  {path: 'Nacho' , component: NachoComponent},
  {path: 'Papo' , component: PapoComponent},
  {path: 'Stuart' , component: StuartComponent},
  {path: 'Sub' , component: SubComponent},
  {path: 'Wolf' , component: WolfComponent},
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
  {path: 'FmsChi' , component:FmsChiComponent},
  {path: 'Acertijo' , component:AcertijoComponent},
  {path: 'Elmenor' , component:ElmenorComponent},
  {path: 'Esezeta' , component:EsezetaComponent},
  {path: 'Jokker' , component:JokkerComponent},
  {path: 'Joqerr' , component:JoqerrComponent},
  {path: 'Nitro', component:NitroComponent},
  {path: 'Pepegrillo' , component:PepegrilloComponent},
  {path: 'Ricto' , component:RictoComponent},
  {path: 'Teorema' , component:TeoremaComponent},
  {path: 'Tomcrowley' , component:TomcrowleyComponent},
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
