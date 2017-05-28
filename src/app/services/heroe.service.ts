import { UrlHandlingStrategy } from '@angular/router/router';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Hero } from './../interface/hero';
import 'rxjs/Rx';

@Injectable()
export class HeroeService {

  heroesURL = 'https://heroesapp-19812.firebaseio.com/heroes.json';
  heroeURL = 'https://heroesapp-19812.firebaseio.com/heroes';

  constructor(private http: Http) { }

  nuevoheroe(heroe: Hero) {

    let body = JSON.stringify( heroe );
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.heroesURL, body, { headers } )
           .map( res => {
             console.log(res.json());
             return res.json();
            });
  }

  actualizarheroe(heroe: Hero, key$: string) {

    let body = JSON.stringify( heroe );
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    let url = `${ this.heroeURL }/${ key$ }.json`;

    return this.http.put( url, body, { headers } )
           .map( res => {
             console.log(res.json());
             return res.json();
            });
  }

}
