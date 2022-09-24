import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quiz-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  isLogged: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    this.isLogged = true;
  }

}
