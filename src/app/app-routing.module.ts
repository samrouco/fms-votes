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
  {path: 'cacha' , component: CachaComponent},
  {path: 'dtoke' , component: DtokeComponent},
  {path: 'klan' , component: KlanComponent},
  {path: 'mecha' , component: MechaComponent},
  {path: 'mks' , component: MksComponent},
  {path: 'nacho' , component: NachoComponent},
  {path: 'papo' , component: PapoComponent},
  {path: 'stuart' , component: StuartComponent},
  {path: 'sub' , component: SubComponent},
  {path: 'wolf' , component: WolfComponent},
  {path: 'FmsEsp', component: FmsEspComponent},
  {path: 'blon' , component: BlonComponent},
  {path: 'bnet' , component: BnetComponent},
  {path: 'errece', component: ErreceComponent},
  {path: 'gazir' , component: GazirComponent},
  {path: 'khan' , component: KhanComponent},
  {path: 'mnak' , component: MnakComponent},
  {path: 'mrego' , component: MregoComponent},
  {path: 'sweetpain' , component: SweetpainComponent},
  {path: 'tirpa' , component: TirpaComponent},
  {path: 'zasko' , component: ZaskoComponent},
  {path: 'FmsMex' , component:FmsMexComponent},
  {path: 'bone' , component:BoneComponent},
  {path: 'garza' , component:GarzaComponent},
  {path: 'jonyb' , component:JonybComponent},
  {path: 'lobo' , component:LoboComponent},
  {path: 'potencia' , component:PotenciaComponent},
  {path: 'rapder' , component:RapderComponent},
  {path: 'rc' , component:RcComponent},
  {path: 'skiper' , component:SkiperComponent},
  {path: 'yoiker' , component:YoikerComponent},
  {path: 'zticma' , component:ZticmaComponent},
  {path: 'FmsChi' , component:FmsChiComponent},
  {path: 'acertijo' , component:AcertijoComponent},
  {path: 'elmenor' , component:ElmenorComponent},
  {path: 'esezeta' , component:EsezetaComponent},
  {path: 'jokker' , component:JokkerComponent},
  {path: 'joqerr' , component:JoqerrComponent},
  {path: 'nitro', component:NitroComponent},
  {path: 'pepegrillo' , component:PepegrilloComponent},
  {path: 'ricto' , component:RictoComponent},
  {path: 'teorema' , component:TeoremaComponent},
  {path: 'tomcrowley' , component:TomcrowleyComponent},
  {path: 'fmsPer' , component:FmsPerComponent},
  {path: 'choque' , component:ChoqueComponent},
  {path: 'jaze' , component:JazeComponent},
  {path: 'jota' , component:JotaComponent},
  {path: 'litzen' , component:LitzenComponent},
  {path: 'nekroos', component:NekroosComponent},
  {path: 'newera' , component:NeweraComponent},
  {path: 'ramset' , component:RamsetComponent},
  {path: 'skill' , component:SkillComponent},
  {path: 'stick' , component:StickComponent},
  {path: 'strike' , component:StrikeComponent},
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
