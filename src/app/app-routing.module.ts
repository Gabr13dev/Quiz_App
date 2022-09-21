import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePreviewComponent } from './pages/game/preview/game-preview.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'game/preview/:id', component: GamePreviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
