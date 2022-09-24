import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/context/game/game.model';
import { GameService } from 'src/app/context/game/game.service';

@Component({
  selector: 'quiz-game-preview',
  templateUrl: './game-preview.component.html'
})
export class GamePreviewComponent implements OnInit {
  game: Game = {} as Game;

  constructor(
    private gameService: GameService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.gameService.getGame(params['id']).subscribe(game => {
        this.game = game;
      });
    });
  }

}
