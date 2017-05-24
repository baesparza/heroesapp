import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Hero } from './../interface/hero';
import 'rxjs/Rx';

@Injectable()
export class HeroeService {

  heroesURL = 'https://heroesapp-19812.firebaseio.com/heroes.json';

  constructor(private http: Http) { }

  nuevoHeroe(heroe: Hero) {

    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify( heroe );
    // tslint:disable-next-line:prefer-const
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.heroesURL, body, { headers } )
           .map( res => {
             console.log(res.json());
             return res.json();
            });
  }

}
