import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';

@Component({
  selector: 'quiz-game-list',
  templateUrl: './game-list.component.html'
})
export class GameListComponent implements OnInit {

  arrayMock = [1,2,3,4,5,6,7,8,9,10,11,12];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToGame(gameId: number) {
    this.router.navigate(['game/preview/' + gameId]);
  }

}
