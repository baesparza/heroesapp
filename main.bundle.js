webpackJsonp([1,5],{

/***/ 140:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 140;


/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(154);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(213),
        styles: [__webpack_require__(209)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_heroes_heroes_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_heroes_heroe_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_heroe_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_keys_pipe__ = __webpack_require__(153);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_heroes_heroes_component__["a" /* HeroesComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_heroes_heroe_component__["a" /* HeroeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pipes_keys_pipe__["a" /* KeysPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* APP_ROUTES */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__services_heroe_service__["a" /* HeroeService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_heroes_heroe_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_heroes_heroes_component__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTES; });



var ROUTES = [
    { path: 'heroes', component: __WEBPACK_IMPORTED_MODULE_2__components_heroes_heroes_component__["a" /* HeroesComponent */] },
    { path: 'heroe/:id', component: __WEBPACK_IMPORTED_MODULE_1__components_heroes_heroe_component__["a" /* HeroeComponent */] },
    { path: '**', redirectTo: 'heroes' }
];
// tslint:disable-next-line:eofline
var APP_ROUTES = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(ROUTES);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value) {
        var keys = [];
        for (var key in value) {
            keys.push(key);
        }
        // console.log(keys);
        return keys;
    };
    return KeysPipe;
}());
KeysPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'keys',
        pure: false
    })
], KeysPipe);

//# sourceMappingURL=keys.pipe.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\n\n  <h1>App Heroes</h1>\n  <router-outlet></router-outlet>\n  \n\n\n</div>\n"

/***/ }),

/***/ 214:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"animated fadeIn\">{{ this.heroe_form.value.nombre }}</h2>\n\n<hr>\n\n<div class=\"button-margin\">\n  <button class=\"btn btn-outline-danger\" type=\"button\" name=\"return\" [routerLink]=\"['heroes']\">\n    Cancelar\n  </button>\n\n  <button class=\"btn btn-outline-success\" type=\"button\" name=\"return\" (click)=\"agregarNuevo()\">\n    Nuevo\n  </button>\n</div>\n\n<div class=\"row animated fadeIn fast\" >\n  <div class=\"col-md-12\">\n\n    <form [formGroup]=\"heroe_form\" (ngSubmit)=\"guardarCambios()\">\n\n      <div class=\"form-group\" [ngClass]=\"{'has-danger': heroe_form.get('nombre').errors && heroe_form.get('nombre').touched,'has-success' : heroe_form.get('nombre').valid}\">\n        <label>Nombre</label>\n\n        <input type=\"text\" class=\"form-control\" placeholder=\"Nombre del Heroe\" formControlName=\"nombre\">\n\n        <div *ngIf=\"heroe_form.get('nombre').errors?.required && heroe_form.get('nombre').touched\" \n                 class=\"form-control-feedback\">Es un campo obligatorio</div>\n      </div>\n\n      <div class=\"form-group\" [ngClass]=\"{'has-danger': heroe_form.get('casa').errors && heroe_form.get('casa').touched,'has-success' : heroe_form.get('casa').valid}\">\n        <label>Casa</label>\n\n        <select class=\"form-control\" formControlName=\"casa\">\n          <option value=\"Marvel\">Marvel</option>\n          <option value=\"DC\">DC</option>\n          \n        </select>\n\n        <div *ngIf=\"heroe_form.get('casa').errors?.required && heroe_form.get('casa').touched\" class=\"form-control-feedback\">Es un campo obligatorio</div>\n      \n      </div>\n\n      <div class=\"form-group\">\n        <label>Bio</label>\n        \n        <textarea type=\"text\" class=\"form-control\" formControlName=\"bio\"></textarea>\n\n      </div>\n      \n      <button class=\"btn btn-outline-primary\" type=\"submit\" name=\"addNew\" [disabled]=\"!heroe_form.valid\">\n        Guardar Cambios\n      </button>\n\n    </form>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <h2>Search</h2>\n  <hr>\n\n  <div class=\"button-margin\">\n\n    <button class=\"btn btn-outline-primary\" type=\"button\" name=\"addNewHeroe\" [routerLink]=\"['/heroe','nuevo']\">\n      Nuevo\n    </button>\n    \n  </div>\n\n</div>\n<div class=\"row animated fadeIn fast\">\n  <div class=\"col-md-12 col-xs-12\">\n    <div class=\"table-responsive\">\n\n      <table class=\"table table-sm\">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>Nombre</th>\n            <th>Casa</th>\n            <th>Opciones</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let k of heroes | keys; let i = index\">\n            <th scope=\"row\">{{ i + 1 }}</th>\n            <td>{{ heroes[k].nombre }}</td>\n            <td>{{ heroes[k].casa }}</td>\n            <td>\n              <button class=\"btn btn-outline-danger\" type=\"button\" name=\"return\" (click)=\"borrarHeroe(k)\">\n                Eliminar\n              </button>\n              <button class=\"btn btn-outline-primary\" type=\"button\" name=\"edit\" [routerLink]=\"['/heroe',k]\">\n                Editar\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n    </div>\n\n    <div class=\"alert alert-info\" role=\"alert\" *ngIf=\"(heroes | keys).length === 0 && !loading\">\n      <strong>No hay</strong> Registros que mostrar.\n    </div>\n\n    <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"loading\">\n      <strong>Cargando...</strong> Por favor espere\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(141);


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroeService = (function () {
    function HeroeService(http) {
        this.http = http;
        this.heroesURL = 'https://heroesapp-19812.firebaseio.com/heroes.json';
        this.heroeURL = 'https://heroesapp-19812.firebaseio.com/heroes';
    }
    HeroeService.prototype.nuevoheroe = function (heroe) {
        var body = JSON.stringify(heroe);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.heroesURL, body, { headers: headers })
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    HeroeService.prototype.actualizarheroe = function (heroe, key$) {
        var body = JSON.stringify(heroe);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var url = this.heroeURL + "/" + key$ + ".json";
        return this.http.put(url, body, { headers: headers })
            .map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    HeroeService.prototype.getheroe = function (key$) {
        var url = this.heroeURL + "/" + key$ + ".json";
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    HeroeService.prototype.getheroes = function () {
        return this.http.get(this.heroesURL)
            .map(function (res) { return res.json(); });
    };
    HeroeService.prototype.borrarheroe = function (key$) {
        var url = this.heroeURL + "/" + key$ + ".json";
        return this.http.delete(url)
            .map(function (res) {
            // console.log(res);
            return res.json();
        });
    };
    return HeroeService;
}());
HeroeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */]) === "function" && _a || Object])
], HeroeService);

var _a;
//# sourceMappingURL=heroe.service.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_heroe_service__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeroeComponent = (function () {
    function HeroeComponent(_heroeService, _router, _activatedRoute) {
        var _this = this;
        this._heroeService = _heroeService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.nuevo = false;
        this._activatedRoute.params
            .subscribe(function (param) {
            _this.id = param['id'];
            if (_this.id !== 'nuevo') {
                _this._heroeService.getheroe(_this.id)
                    .subscribe(function (heroe) {
                    _this.heroe_form.setValue(heroe);
                });
            }
        });
        this.heroe_form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            nombre: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            casa: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('Marvel', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            bio: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('')
        });
    }
    HeroeComponent.prototype.ngOnInit = function () {
    };
    HeroeComponent.prototype.guardarCambios = function () {
        var _this = this;
        console.log(this.heroe_form.value);
        // console.log(this.heroe_form);
        if (this.id === 'nuevo') {
            this._heroeService.nuevoheroe(this.heroe_form.value)
                .subscribe(function (data) {
                _this._router.navigate(['/heroe', data.name]);
            }, function (error) { return console.error(error); });
        }
        else {
            this._heroeService.actualizarheroe(this.heroe_form.value, this.id)
                .subscribe(function (data) {
                // console.log(data);
            }, function (error) { return console.error(error); });
        }
    };
    // Para redireccionarnos a una nueva pestaña y seleccionar un nuevo heroe
    HeroeComponent.prototype.agregarNuevo = function () {
        this._router.navigate(['/heroe', 'nuevo']);
        this.heroe_form.reset({
            nombre: '',
            casa: 'Marvel',
            bio: ''
        });
    };
    return HeroeComponent;
}());
HeroeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-heroe',
        template: __webpack_require__(214),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_heroe_service__["a" /* HeroeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_heroe_service__["a" /* HeroeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], HeroeComponent);

var _a, _b, _c;
//# sourceMappingURL=heroe.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_heroe_service__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroesComponent = (function () {
    function HeroesComponent(_heroeService) {
        var _this = this;
        this._heroeService = _heroeService;
        this.heroes = [];
        this.loading = true;
        this._heroeService.getheroes()
            .subscribe(function (data) {
            _this.heroes = data;
            // console.log(this.heroes);
            _this.loading = false;
        });
    }
    HeroesComponent.prototype.ngOnInit = function () {
    };
    HeroesComponent.prototype.borrarHeroe = function (key$) {
        var _this = this;
        this._heroeService.borrarheroe(key$)
            .subscribe(function (param) {
            // console.log(param);
            if (param) {
                console.error(param);
            }
            else {
                delete _this.heroes[key$];
            }
        });
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-heroes',
        template: __webpack_require__(215),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_heroe_service__["a" /* HeroeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_heroe_service__["a" /* HeroeService */]) === "function" && _a || Object])
], HeroesComponent);

var _a;
//# sourceMappingURL=heroes.component.js.map

/***/ })

},[483]);
//# sourceMappingURL=main.bundle.js.map