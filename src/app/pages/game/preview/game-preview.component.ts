import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/context/game/game.model';
import { GameService } from 'src/app/context/game/game.service';

@Component({
  selector: 'quiz-game-preview',
  templateUrl: './game-preview.component.html'
})
export class GamePreviewComponent implements OnInit {
  game: Game | null = null;

  constructor(
    private gameService: GameService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
       this.getGame(params['id']);
    });
  }

  gameNotFound(error: any) {
    console.log(error);
    alert(error);
  }

  getGame(idGame: number): void {
    this.gameService.getGame(idGame)
      .subscribe(game => {
        this.game = game
      }, error => {
        this.gameNotFound(error);
      });
  }

}
