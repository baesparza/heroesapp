import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './components/heroes/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';

const ROUTES: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: '**', redirectTo: 'heroes' }

];

// tslint:disable-next-line:eofline
export const APP_ROUTES = RouterModule.forRoot(ROUTES);