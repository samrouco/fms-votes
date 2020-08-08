import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { McSelectorComponent } from './components/mc-selector/mc-selector.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SharingService } from './services/SharingService';
import { FormsModule } from '@angular/forms';
import { EasyComponent } from './components/easy/easy.component';
import { PatronNumberDirective } from './components/base/patron-number-directive';
import { ExtraScoreNumberDirective } from './components/base/extra-score-directive';
import { HardComponent } from './components/hard/hard.component';
import { ThematicComponent } from './components/thematic/thematic.component';
import { BloodComponent } from './components/blood/blood.component';
import { CharactersComponent } from './components/characters/characters.component';
import { DeluxeComponent } from './components/deluxe/deluxe.component';
import { ResultsComponent } from './components/results/results.component';
import { FmsSelectorComponent } from './components/fms-selector/fms-selector.component';
import { FmsEspComponent } from './components/fms-esp/fms-esp.component';
import { BlonComponent } from './components/blon/blon.component';
import { KhanComponent } from './components/khan/khan.component';
import { MregoComponent } from './components/mrego/mrego.component';
import { TirpaComponent } from './components/tirpa/tirpa.component';
import { ZaskoComponent } from './components/zasko/zasko.component';
import { GazirComponent } from './components/gazir/gazir.component';
import { MnakComponent } from './components/mnak/mnak.component';
import { ErreceComponent } from './components/errece/errece.component';
import { BnetComponent } from './components/bnet/bnet.component';
import { SweetpainComponent } from './components/sweetpain/sweetpain.component';
import { FmsMexComponent } from './components/fms-mex/fms-mex.component';
import { FmsPerComponent } from './components/fms-per/fms-per.component';
import { LoboComponent } from './components/fms-mex/gallos/lobo/lobo.component';
import { BoneComponent } from './components/fms-mex/gallos/bone/bone.component';
import { JonybComponent } from './components/fms-mex/gallos/jonyb/jonyb.component';
import { GarzaComponent } from './components/fms-mex/gallos/garza/garza.component';
import { RcComponent } from './components/fms-mex/gallos/rc/rc.component';
import { PotenciaComponent } from './components/fms-mex/gallos/potencia/potencia.component';
import { YoikerComponent } from './components/fms-mex/gallos/yoiker/yoiker.component';
import { ZticmaComponent } from './components/fms-mex/gallos/zticma/zticma.component';
import { RapderComponent } from './components/fms-mex/gallos/rapder/rapder.component';
import { SkiperComponent } from './components/fms-mex/gallos/skiper/skiper.component';
import { JotaComponent } from './components/fms-per/gallos/jota/jota.component';
import { SkillComponent } from './components/fms-per/gallos/skill/skill.component';
import { JazeComponent } from './components/fms-per/gallos/jaze/jaze.component';
import { LitzenComponent } from './components/fms-per/gallos/litzen/litzen.component';
import { NekroosComponent } from './components/fms-per/gallos/nekroos/nekroos.component';
import { NeweraComponent } from './components/fms-per/gallos/newera/newera.component';
import { RamsetComponent } from './components/fms-per/gallos/ramset/ramset.component';
import { StickComponent } from './components/fms-per/gallos/stick/stick.component';
import { ChoqueComponent } from './components/fms-per/gallos/choque/choque.component';
import { StrikeComponent } from './components/fms-per/gallos/strike/strike.component';
import { EventEmitter } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    McSelectorComponent,
    EasyComponent,
    PatronNumberDirective,
    ExtraScoreNumberDirective,
    HardComponent,
    ThematicComponent,
    BloodComponent,
    CharactersComponent,
    DeluxeComponent,
    ResultsComponent,
    FmsSelectorComponent,
    FmsEspComponent,
    BlonComponent,
    KhanComponent,
    MregoComponent,
    TirpaComponent,
    ZaskoComponent,
    GazirComponent,
    MnakComponent,
    ErreceComponent,
    BnetComponent,
    SweetpainComponent,
    FmsMexComponent,
    FmsPerComponent,
    LoboComponent,
    BoneComponent,
    JonybComponent,
    GarzaComponent,
    RcComponent,
    PotenciaComponent,
    YoikerComponent,
    ZticmaComponent,
    RapderComponent,
    SkiperComponent,
    JotaComponent,
    SkillComponent,
    JazeComponent,
    LitzenComponent,
    NekroosComponent,
    NeweraComponent,
    RamsetComponent,
    StickComponent,
    ChoqueComponent,
    StrikeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [
    SharingService,
    EventEmitter
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


