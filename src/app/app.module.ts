import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { GameComponent } from './components/quiz/game/game.component';
import { PreviewComponent } from './components/quiz/preview/preview.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { HomeComponent } from './pages/home/home.component';
import { GamePreviewComponent } from './pages/game/preview/game-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GameComponent,
    PreviewComponent,
    GameListComponent,
    GamePreviewComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
