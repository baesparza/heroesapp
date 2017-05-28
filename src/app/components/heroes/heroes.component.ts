import { Component, OnInit } from '@angular/core';

import { HeroeService } from './../../services/heroe.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  private heroes: any[] = [];

  constructor(private _heroeService: HeroeService) {

    this._heroeService.getheroes()
      .subscribe(data => {
        this.heroes = data;
        // console.log(this.heroes);
      });
  }

  ngOnInit() {
  }

}
