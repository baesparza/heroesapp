import { error } from 'util';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Hero } from './../../interface/hero';
import { HeroeService } from './../../services/heroe.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})

export class HeroeComponent implements OnInit {

  heroe: Hero = {
    nombre: 'Batman',
    casa: 'DC',
    bio: 'MAasdfasdfasdfasdf'
  };

  heroe_form: FormGroup;

  constructor(private _heroeService: HeroeService, private _router: Router) {
    this.heroe_form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      casa: new FormControl('', Validators.required),
      bio: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  ngOnInit() {
  }

  guardarCambios () {
   console.log(this.heroe_form.value);
   // console.log(this.heroe_form);

   this._heroeService.nuevoHeroe( this.heroe )
       .subscribe( data => {
          this._router.navigate(['/heroe', data.name]);
       },
       error => console.error(error));
 }

}
