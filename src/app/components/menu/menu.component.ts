import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quiz-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  isLogged: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    this.isLogged = true;
  }

}
