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
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [ SharingService ],
  bootstrap: [AppComponent]
})
export class AppModule { }


