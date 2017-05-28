import { error } from 'util';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Hero } from './../../interface/hero';
import { HeroeService } from './../../services/heroe.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})

export class HeroeComponent implements OnInit {

  nuevo = false;
  id;

  heroe_form: FormGroup;

  constructor(private _heroeService: HeroeService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute) {

    this._activatedRoute.params
        .subscribe( param => {
          this.id = param['id'];
          if (this.id !== 'nuevo') {
            this._heroeService.getheroe( this.id )
              .subscribe( heroe => {
                this.heroe_form.setValue(heroe);
              });
          }
      });

    this.heroe_form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      casa: new FormControl('Marvel', Validators.required),
      bio: new FormControl('')
    });
  }

  ngOnInit() {
  }

  guardarCambios () {
    console.log(this.heroe_form.value);
    // console.log(this.heroe_form);

    if (this.id === 'nuevo') {

    this._heroeService.nuevoheroe( this.heroe_form.value )
        .subscribe( data => {
           this._router.navigate(['/heroe', data.name]);
        },
        error => console.error(error));

   } else {

    this._heroeService.actualizarheroe( this.heroe_form.value, this.id )
        .subscribe( data => {
           // console.log(data);
        },
        error => console.error(error));

   }

  }

  // Para redireccionarnos a una nueva pestaña y seleccionar un nuevo heroe
  agregarNuevo() {
    this._router.navigate(['/heroe', 'nuevo']);
    this.heroe_form.reset({
      nombre: '',
      casa: 'Marvel',
      bio: ''
    });
  }

}
