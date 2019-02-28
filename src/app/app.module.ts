import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Game02Component } from './games/game02/game02.component';
import { Game03Component } from './games/game03/game03.component';
import { Game04Component } from './games/game04/game04.component';
import { Game05Component } from './games/game05/game05.component';
import { Game06Component } from './games/game06/game06.component';
import { Game07Component } from './games/game07/game07.component';
import { Game08Component } from './games/game08/game08.component';
import { Game09Component } from './games/game09/game09.component';
import { Game10Component } from './games/game10/game10.component';

@NgModule({
  declarations: [
    AppComponent,
    Game02Component,
    Game03Component,
    Game04Component,
    Game05Component,
    Game06Component,
    Game07Component,
    Game08Component,
    Game09Component,
    Game10Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
