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

  borrarHeroe(key$: string) {

    this._heroeService.borrarheroe(key$)
      .subscribe(param => {
        // console.log(param);
        if (param) {
          console.error(param);
        } else {
          delete this.heroes[key$];
        }
      });

  }
}
