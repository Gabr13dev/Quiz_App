import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { Game } from 'src/app/context/game/game.model';
import { GameService } from 'src/app/context/game/game.service';

@Component({
  selector: 'quiz-game-list',
  templateUrl: './game-list.component.html'
})
export class GameListComponent implements OnInit {

  games: Game[] = [];

  constructor(
    private router: Router,
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(games => this.games = games);

  }

  goToGame(gameId: number) {
    this.router.navigate(['game/preview/' + gameId]);
  }

}
