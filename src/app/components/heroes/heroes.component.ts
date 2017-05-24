import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
    `
    .button-margin{
      margin-bottom: 15px;
    }
    `
  ]
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
