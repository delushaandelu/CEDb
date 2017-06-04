webpackJsonp([1,4],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MoviesService = (function () {
    function MoviesService(_jsonp, http) {
        this._jsonp = _jsonp;
        this.http = http;
        console.log('Movies service is ready');
    }
    MoviesService.prototype.getAll = function () {
        return this.http.get('/movie/getall')
            .map(function (res) { return res.json(); });
    };
    MoviesService.prototype.getPopular = function () {
        return this.http.get('/movie/getpopular')
            .map(function (res) { return res.json(); });
    };
    MoviesService.prototype.getToprated = function () {
        return this.http.get('/movie/toprated')
            .map(function (res) { return res.json(); });
    };
    MoviesService.prototype.getByCatagory = function (cat) {
        return this.http.get('/movie/catagory/' + cat)
            .map(function (res) { return res.json(); });
    };
    MoviesService.prototype.getByChannel = function (name) {
        return this.http.get('/movie/channel/' + name)
            .map(function (res) { return res.json(); });
    };
    MoviesService.prototype.addcomment = function (comment) {
        var bodyString = JSON.stringify(comment);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.post('/movie/addcomment/', bodyString, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    MoviesService.prototype.addrateList = function (ratelist) {
        console.log(ratelist);
        var bodyString = JSON.stringify(ratelist);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.post('/movie/addrating/', bodyString, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    MoviesService.prototype.updaterateList = function (ratelist) {
        var bodyString = JSON.stringify(ratelist);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.put('/movie/updaterate/', bodyString, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    MoviesService.prototype.calculation = function (id) {
        var _this = this;
        var ratelist;
        var total = 0;
        var count = 0;
        var rating = 0;
        this.http.get('/movie/getmovie/' + id).subscribe(function (res) {
            ratelist = res.json().ratelist;
            for (var _i = 0, _a = res.json().ratelist; _i < _a.length; _i++) {
                var x = _a[_i];
                total = total + parseInt(x["rate"]);
                count++;
            }
            rating = total / count;
            var d = {
                dramaID: id,
                rating: rating
            };
            var bodyString = JSON.stringify(d);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
            return _this.http.put('/movie/updaterating/', bodyString, options)
                .map(function (res) { return res.json(); })
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
        });
        console.log(ratelist);
    };
    MoviesService.prototype.getMovie = function (id) {
        return this.http.get('/movie/getmovie/' + id)
            .map(function (res) { return res.json(); });
    };
    MoviesService.prototype.getChannel = function (name) {
        return this.http.get('/channel/findchannel/' + name)
            .map(function (res) { return res.json(); });
    };
    MoviesService.prototype.getChannelnames = function () {
        return this.http.get('/channel/getnames')
            .map(function (res) { return res.json(); });
    };
    MoviesService.prototype.getActor = function (id) {
        return this.http.get('/actor/getactor/' + id)
            .map(function (res) { return res.json(); });
    };
    MoviesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Jsonp"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Jsonp"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _b) || Object])
    ], MoviesService);
    return MoviesService;
    var _a, _b;
}());
//# sourceMappingURL=/home/isurunath/Desktop/Group 29/CEDb/client/src/movies.service.js.map

/***/ }),

/***/ 1045:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(610);


/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















// If you need to support the browsers/features below, uncomment the import
// and run `npm install import-name-here';
// Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
// Needed for: IE9
// import 'classlist.js';
// Animations
// Needed for: All but Chrome and Firefox, Not supported in IE9
// import 'web-animations-js';
// Date, currency, decimal and percent pipes
// Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
// import 'intl';
// NgClass on SVG elements
// Needed for: IE10, IE11
// import 'classlist.js';
//# sourceMappingURL=/home/isurunath/Desktop/Group 29/CEDb/client/src/polyfills.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=/home/isurunath/Desktop/Group 29/CEDb/client/src/validate.service.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_movies_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(_moviesServices, authService, router) {
        var _this = this;
        this._moviesServices = _moviesServices;
        this.authService = authService;
        this.router = router;
        this.cnames = [];
        this._moviesServices.getChannelnames().subscribe(function (res) {
            _this.cnames = res;
            console.log(_this.cnames);
        });
    }
    AppComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        //this.flashMessageService.show("Logged Out",{cssClass:'alert-success', timeout: 3000});
        console.log("Logout");
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(766),
            styles: [__webpack_require__(748)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_movies_service__["a" /* MoviesService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_movies_service__["a" /* MoviesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_movies_service__["a" /* MoviesService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/isurunath/Desktop/Group 29/CEDb/client/src/app.component.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.user = user;
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/home/isurunath/Desktop/Group 29/CEDb/client/src/auth.service.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_movies_service__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActorComponent = (function () {
    function ActorComponent(_moviesSerice, router) {
        this._moviesSerice = _moviesSerice;
        this.router = router;
    }
    ActorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this._moviesSerice.getActor(params["id"]).subscribe(function (res) {
                _this.actor = res;
            });
        });
    };
    ActorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-actor',
            template: __webpack_require__(768),
            styles: [__webpack_require__(750)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_movies_service__["a" /* MoviesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_movies_service__["a" /* MoviesService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], ActorComponent);
    return ActorComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/isurunath/Desktop/Group 29/CEDb/client/src/actor.component.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddmovieComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddmovieComponent = (function () {
    function AddmovieComponent() {
    }
    AddmovieComponent.prototype.ngOnInit = function () {
    };
    AddmovieComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addmovie',
            template: __webpack_require__(769),
            styles: [__webpack_require__(751)]
        }), 
        __metadata('design:paramtypes', [])
    ], AddmovieComponent);
    return AddmovieComponent;
}());
//# sourceMappingURL=/home/isurunath/Desktop/Group 29/CEDb/client/src/addmovie.component.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (dashboard) {
            _this.user = dashboard.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(770),
            styles: [__webpack_require__(752)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/isurunath/Desktop/Group 29/CEDb/client/src/dashboard.component.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(771),
            styles: [__webpack_require__(753)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/home/isurunath/Desktop/Group 29/CEDb/client/src/home.component.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var cLoginComponent = (function () {
    function cLoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    cLoginComponent.prototype.ngOnInit = function () {
    };
    cLoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('Your are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 5000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    cLoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(772),
            styles: [__webpack_require__(754)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], cLoginComponent);
    return cLoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/isurunath/Desktop/Group 29/CEDb/client/src/login.component.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(774),
            styles: [__webpack_require__(756)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/isurunath/Desktop/Group 29/CEDb/client/src/profile.component.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cRegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var cRegisterComponent = (function () {
    function cRegisterComponent(validateService, flahMessage, authService, router) {
        this.validateService = validateService;
        this.flahMessage = flahMessage;
        this.authService = authService;
        this.router = router;
    }
    cRegisterComponent.prototype.ngOnInit = function () {
    };
    cRegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            regno: this.regno,
            telephone: this.telephone,
            website: this.website,
            youtube_channel: this.youtube_channel,
            logo: this.logo,
            username: this.username,
            password: this.password
        };
        //Required Fileds
        if (!this.validateService.validateRegister(user)) {
            this.flahMessage.show('Please Fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Validate email
        if (!this.validateService.validateEmail(user.email)) {
            this.flahMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flahMessage.show('Success | Your are now registered!', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flahMessage.show('Error | Unable to Register!', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    cRegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(775),
            styles: [__webpack_require__(757)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], cRegisterComponent);
    return cRegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/isurunath/Desktop/Group 29/CEDb/client/src/register.component.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_movies_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChannelComponent = (function () {
    function ChannelComponent(moviesService, router) {
        this.moviesService = moviesService;
        this.router = router;
    }
    ChannelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe((function (params) {
            _this.moviesService.getChannel(params['name']).subscribe(function (channel) {
                _this.channel = channel;
            });
            _this.moviesService.getByChannel(params['name']).subscribe(function (res) { _this.popularList = res; console.log(res); });
        }));
    };
    ChannelComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-channel',
            template: __webpack_require__(776),
            styles: [__webpack_require__(758)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_movies_service__["a" /* MoviesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_movies_service__["a" /* MoviesService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], ChannelComponent);
    return ChannelComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/isurunath/Desktop/Group 29/CEDb/client/src/channel.component.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessageService) {
        this.authService = authService;
        this.router = router;
        this.flashMessageService = flashMessageService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        //console.log(user.username);
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessageService.show("Succesfully logged in", { cssClass: 'alert-success', timeout: 3000 });
                console.log("Succesfully logged in");
                _this.router.navigate(['']);
            }
            else {
                _this.flashMessageService.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                console.log("login Fail");
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(778),
            styles: [__webpack_require__(760)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/isurunath/Desktop/Group 29/CEDb/client/src/login.component.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_movies_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MovieComponent = (function () {
    function MovieComponent(_moviesServices, authService, router, sanitizer, rrouter, flashMessageService) {
        var _this = this;
        this._moviesServices = _moviesServices;
        this.authService = authService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.rrouter = rrouter;
        this.flashMessageService = flashMessageService;
        //current user rate
        this.r = "0";
        this.season = "1";
        this.s = [];
        this.onClick = function ($event) {
            _this.onClickResult = $event;
            if (_this.authService.loggedIn()) {
                _this.authService.getProfile().subscribe(function (res) {
                    var ratelist = {
                        dramaID: _this.id,
                        ratelist: { uID: res.user._id, rate: $event.rating }
                    };
                    if (_this.r == "0") {
                        _this._moviesServices.addrateList(ratelist).subscribe(function (res) {
                            _this.flashMessageService.show("Rating Added Successfully", { cssClass: 'alert-success', timeout: 3000 });
                        });
                    }
                    else {
                        _this.onclickrate = $event.rating;
                        _this._moviesServices.updaterateList(ratelist).subscribe(function (res) {
                            _this.flashMessageService.show("Rating updated Successfully", { cssClass: 'alert-success', timeout: 3000 });
                            //console.log(res)
                        });
                    }
                });
            }
            else {
                _this.rrouter.navigate(['/login']);
            }
        };
        this.onRatingChange = function ($event) {
            _this.onRatingChangeResult = $event;
        };
        this.onHoverRatingChange = function ($event) {
            _this.onHoverRatingChangeResult = $event;
            _this.onclickrate = $event.hoverRating;
        };
    }
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.id = params['id'];
            _this._moviesServices.getMovie(_this.id).subscribe(function (movie) {
                _this.movie = movie;
                _this.com = movie.userComments;
                _this.ratelist = movie.ratelist;
                _this.url = _this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + movie.trailerURL);
                _this.epi = false;
                _this.actor = false;
                _this.review = true;
                //get current logged in user rating
                if (_this.authService.loggedIn()) {
                    _this.authService.getProfile().subscribe(function (res) {
                        _this.user = res.user._id;
                        for (var _i = 0, _a = _this.ratelist; _i < _a.length; _i++) {
                            var x_1 = _a[_i];
                            if (x_1["uID"] == _this.user) {
                                _this.r = x_1["rate"];
                                _this.onclickrate = parseInt(_this.r);
                            }
                        }
                    });
                }
                //get channel 
                _this._moviesServices.getChannel(movie.tvChannel).subscribe(function (res) {
                    _this.channel = res;
                });
                //calculate number of seasons
                for (var x = 1; x <= movie.numberOfSeasons; x++) {
                    _this.s.push(x);
                }
            });
        });
    };
    MovieComponent.prototype.getepisode = function () {
        this.review = false;
        this.actor = false;
        this.epi = true;
    };
    MovieComponent.prototype.getactor = function () {
        this.epi = false;
        this.review = false;
        this.actor = true;
    };
    MovieComponent.prototype.getreview = function () {
        this.epi = false;
        this.review = true;
        this.actor = false;
    };
    MovieComponent.prototype.addReview = function () {
        var _this = this;
        if (this.authService.loggedIn()) {
            this.authService.getProfile().subscribe(function (res) {
                var date = new Date();
                var comment = {
                    dramaID: _this.id,
                    comment: { text: _this.comment, date: date, postedBy: res.user.username }
                };
                _this._moviesServices.addcomment(comment).subscribe(function (res) {
                    _this.comment = '';
                    _this.com.push(comment.comment);
                    _this.flashMessageService.show("Review Added Successfully", { cssClass: 'alert-success', timeout: 3000 });
                    //console.log(res)
                });
            });
        }
        else {
            this.rrouter.navigate(['/login']);
        }
    };
    MovieComponent.prototype.change = function (number) {
        this.season = number;
    };
    MovieComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-movie',
            template: __webpack_require__(780),
            styles: [__webpack_require__(762)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_movies_service__["a" /* MoviesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_movies_service__["a" /* MoviesService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _f) || Object])
    ], MovieComponent);
    return MovieComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/home/isurunath/Desktop/Group 29/CEDb/client/src/movie.component.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_movies_service__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MoviesComponent = (function () {
    function MoviesComponent(_moviesService) {
        var _this = this;
        this._moviesService = _moviesService;
        this._moviesService.getPopular().subscribe(function (res) {
            _this.popularList = res;
            console.log(_this.popularList);
        });
        this._moviesService.getToprated().subscribe(function (res) {
            _this.topRatedList = res;
            console.log(_this.topRatedList);
        });
    }
    MoviesComponent.prototype.ngOnInit = function () {
    };
    MoviesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'movies',
            template: __webpack_require__(781),
            styles: [__webpack_require__(763)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_movies_service__["a" /* MoviesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_movies_service__["a" /* MoviesService */]) === 'function' && _a) || Object])
    ], MoviesComponent);
    return MoviesComponent;
    var _a;
}());
//# sourceMappingURL=/home/isurunath/Desktop/Group 29/CEDb/client/src/movies.component.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(vaidateService, flashMessagesService, authService, router) {
        this.vaidateService = vaidateService;
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        if (!this.vaidateService.validateRegister(user)) {
            this.flashMessagesService.show('PLese fill ', { cssClass: 'alert-danger', timeout: 3000 });
            console.log("please fill");
            return false;
        }
        if (!this.vaidateService.validateEmail(user.email)) {
            this.flashMessagesService.show('email wrong ', { cssClass: 'alert-danger', timeout: 3000 });
            console.log("wrong email");
            return false;
        }
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show('User registered', { cssClass: 'alert-success', timeout: 3000 });
                console.log("User Registered");
                _this.router.navigate(['login']);
            }
            else {
                _this.flashMessagesService.show('User registered fail', { cssClass: 'alert-danger', timeout: 3000 });
                console.log("registration Fail");
                _this.router.navigate(['login/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(782),
            styles: [__webpack_require__(764)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/isurunath/Desktop/Group 29/CEDb/client/src/register.component.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_movies_service__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchResultComponent = (function () {
    function SearchResultComponent(router, moviesService) {
        this.router = router;
        this.moviesService = moviesService;
    }
    SearchResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.moviesService.getByCatagory(params['cat']).subscribe(function (res) {
                _this.dramabycat = res;
            });
        });
    };
    SearchResultComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search-result',
            template: __webpack_require__(783),
            styles: [__webpack_require__(765)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_movies_service__["a" /* MoviesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_movies_service__["a" /* MoviesService */]) === 'function' && _b) || Object])
    ], SearchResultComponent);
    return SearchResultComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/isurunath/Desktop/Group 29/CEDb/client/src/search-result.component.js.map

/***/ }),

/***/ 609:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 609;


/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(732);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/home/isurunath/Desktop/Group 29/CEDb/client/src/main.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_movies_movies_component__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_movie_movie_component__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_movie_card_movie_card_component__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_actor_actor_component__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_validate_service__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_episode_list_episode_list_component__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_actor_list_actor_list_component__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_admin_navbar_navbar_component__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_admin_login_login_component__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_admin_register_register_component__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_admin_home_home_component__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_admin_dashboard_dashboard_component__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_admin_profile_profile_component__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_admin_addmovie_addmovie_component__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_channel_channel_component__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng2_opd_popup__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_search_result_search_result_component__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angular_star_rating__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angular_star_rating___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_angular_star_rating__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_movies_movies_component__["a" /* MoviesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_movie_movie_component__["a" /* MovieComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_movie_card_movie_card_component__["a" /* MovieCardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_actor_actor_component__["a" /* ActorComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_episode_list_episode_list_component__["a" /* EpisodeListComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_actor_list_actor_list_component__["a" /* ActorListComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_admin_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_admin_login_login_component__["a" /* cLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_admin_register_register_component__["a" /* cRegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_admin_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_admin_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_admin_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_admin_addmovie_addmovie_component__["a" /* AddmovieComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_channel_channel_component__["a" /* ChannelComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_search_result_search_result_component__["a" /* SearchResultComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["JsonpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* appRoutes */]),
                __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_27_ng2_opd_popup__["a" /* PopupModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_29_angular_star_rating__["StarRatingModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/isurunath/Desktop/Group 29/CEDb/client/src/app.module.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_movies_movies_component__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_movie_movie_component__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_actor_actor_component__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_admin_login_login_component__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_admin_register_register_component__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_admin_dashboard_dashboard_component__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_admin_profile_profile_component__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_admin_addmovie_addmovie_component__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_admin_home_home_component__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_channel_channel_component__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_search_result_search_result_component__ = __webpack_require__(572);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });













var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__components_movies_movies_component__["a" /* MoviesComponent */] },
    { path: 'movie/:id', component: __WEBPACK_IMPORTED_MODULE_1__components_movie_movie_component__["a" /* MovieComponent */] },
    { path: 'actor/:id', component: __WEBPACK_IMPORTED_MODULE_2__components_actor_actor_component__["a" /* ActorComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'login/register', component: __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'channel/:name', component: __WEBPACK_IMPORTED_MODULE_11__components_channel_channel_component__["a" /* ChannelComponent */] },
    { path: 'catagory/:cat', component: __WEBPACK_IMPORTED_MODULE_12__components_search_result_search_result_component__["a" /* SearchResultComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_10__components_admin_home_home_component__["a" /* HomeComponent */] },
    { path: 'admin/register', component: __WEBPACK_IMPORTED_MODULE_6__components_admin_register_register_component__["a" /* cRegisterComponent */] },
    { path: 'admin/login', component: __WEBPACK_IMPORTED_MODULE_5__components_admin_login_login_component__["a" /* cLoginComponent */] },
    { path: 'admin/dashboard', component: __WEBPACK_IMPORTED_MODULE_7__components_admin_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'admin/profile', component: __WEBPACK_IMPORTED_MODULE_8__components_admin_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'admin/addmovie', component: __WEBPACK_IMPORTED_MODULE_9__components_admin_addmovie_addmovie_component__["a" /* AddmovieComponent */] }
];
//# sourceMappingURL=/home/isurunath/Desktop/Group 29/CEDb/client/src/app.routes.js.map

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_movies_service__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActorListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActorListComponent = (function () {
    function ActorListComponent(moviesService) {
        this.moviesService = moviesService;
        this.crew = [];
    }
    ActorListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actors.forEach(function (element) {
            _this.moviesService.getActor(element["id"]).subscribe(function (res) {
                _this.crew.push({ actor: res, role: element["role"] });
            });
        });
        console.log(this.crew);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], ActorListComponent.prototype, "actors", void 0);
    ActorListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-actor-list',
            template: __webpack_require__(767),
            styles: [__webpack_require__(749)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_movies_service__["a" /* MoviesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_movies_service__["a" /* MoviesService */]) === 'function' && _a) || Object])
    ], ActorListComponent);
    return ActorListComponent;
    var _a;
}());
//# sourceMappingURL=/home/isurunath/Desktop/Group 29/CEDb/client/src/actor-list.component.js.map

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-info',
            timeout: 5000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(773),
            styles: [__webpack_require__(755)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/isurunath/Desktop/Group 29/CEDb/client/src/navbar.component.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_opd_popup__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EpisodeListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EpisodeListComponent = (function () {
    function EpisodeListComponent(popup, sanitizer) {
        this.popup = popup;
        this.sanitizer = sanitizer;
        this.filterepisode = [];
    }
    EpisodeListComponent.prototype.ngOnInit = function () {
        this.popup.options = {
            header: "",
            color: "#505b7f",
            widthProsentage: 50,
            animationDuration: 1,
            showButtons: true,
            cancleBtnContent: "Close",
            cancleBtnClass: "btn btn-default",
            animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown' 
        };
    };
    EpisodeListComponent.prototype.ngOnChanges = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        this.filterepisode = [];
        this.episode.forEach(function (element) {
            if (element["season"] == _this.snumber) {
                _this.filterepisode.push(element);
            }
        });
        console.log(this.filterepisode);
    };
    EpisodeListComponent.prototype.ClickButton = function (epiUrl) {
        this.popup.show(this.popup.options);
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + epiUrl);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('episode'), 
        __metadata('design:type', Object)
    ], EpisodeListComponent.prototype, "episode", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('snumber'), 
        __metadata('design:type', String)
    ], EpisodeListComponent.prototype, "snumber", void 0);
    EpisodeListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-episode-list',
            template: __webpack_require__(777),
            styles: [__webpack_require__(759)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_opd_popup__["b" /* Popup */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_opd_popup__["b" /* Popup */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _b) || Object])
    ], EpisodeListComponent);
    return EpisodeListComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/isurunath/Desktop/Group 29/CEDb/client/src/episode-list.component.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MovieCardComponent = (function () {
    function MovieCardComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], MovieCardComponent.prototype, "movie", void 0);
    MovieCardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'movie-card',
            template: __webpack_require__(779),
            styles: [__webpack_require__(761)]
        }), 
        __metadata('design:paramtypes', [])
    ], MovieCardComponent);
    return MovieCardComponent;
}());
//# sourceMappingURL=/home/isurunath/Desktop/Group 29/CEDb/client/src/movie-card.component.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/home/isurunath/Desktop/Group 29/CEDb/client/src/auth.guard.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(559);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(725);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/home/isurunath/Desktop/Group 29/CEDb/client/src/index.js.map

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/isurunath/Desktop/Group 29/CEDb/client/src/environment.js.map

/***/ }),

/***/ 748:
/***/ (function(module, exports) {

module.exports = ".logbtn{\n    float: right;\n}\n\n.homehead{\n    min-height: 100px;\n\n}\n\n.homebody{\n    padding-top: 0px;\n    margin-top: 120px;\n    background-color:#bfbfbf ;\n}\n\n.logo{\n    height: 90px;\n    width: 150px;\n}\n\n.footer-distributed{\n\tbackground-color: #292c2f;\n\tbox-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\n\tbox-sizing: border-box;\n\twidth: 100%;\n\ttext-align: left;\n\tfont: bold 16px sans-serif;\n\n\tpadding: 55px 50px;\n\tmargin-top: 20px;\n}\n\n.footer-distributed .footer-left,\n.footer-distributed .footer-center,\n.footer-distributed .footer-right{\n\tdisplay: inline-block;\n\tvertical-align: top;\n}\n\n/* Footer left */\n\n.footer-distributed .footer-left{\n\twidth: 40%;\n}\n\n/* The company logo */\n\n.footer-distributed h3{\n\tcolor:  #ffffff;\n\tfont: normal 36px 'Cookie', cursive;\n\tmargin: 0;\n}\n\n.footer-distributed h3 span{\n\tcolor:  #5383d3;\n}\n\n/* Footer links */\n\n.footer-distributed .footer-links{\n\tcolor:  #ffffff;\n\tmargin: 20px 0 12px;\n\tpadding: 0;\n}\n\n.footer-distributed .footer-links a{\n\tdisplay:inline-block;\n\tline-height: 1.8;\n\ttext-decoration: none;\n\tcolor:  inherit;\n}\n\n.footer-distributed .footer-company-name{\n\tcolor:  #8f9296;\n\tfont-size: 14px;\n\tfont-weight: normal;\n\tmargin: 0;\n}\n\n/* Footer Center */\n\n.footer-distributed .footer-center{\n\twidth: 35%;\n}\n\n.footer-distributed .footer-center i{\n\tbackground-color:  #33383b;\n\tcolor: #ffffff;\n\tfont-size: 25px;\n\twidth: 38px;\n\theight: 38px;\n\tborder-radius: 50%;\n\ttext-align: center;\n\tline-height: 42px;\n\tmargin: 10px 15px;\n\tvertical-align: middle;\n}\n\n.footer-distributed .footer-center i.fa-envelope{\n\tfont-size: 17px;\n\tline-height: 38px;\n}\n\n.footer-distributed .footer-center p{\n\tdisplay: inline-block;\n\tcolor: #ffffff;\n\tvertical-align: middle;\n\tmargin:0;\n}\n\n.footer-distributed .footer-center p span{\n\tdisplay:block;\n\tfont-weight: normal;\n\tfont-size:14px;\n\tline-height:2;\n}\n\n.footer-distributed .footer-center p a{\n\tcolor:  #5383d3;\n\ttext-decoration: none;;\n}\n\n\n/* Footer Right */\n\n.footer-distributed .footer-right{\n\twidth: 20%;\n}\n\n.footer-distributed .footer-company-about{\n\tline-height: 20px;\n\tcolor:  #92999f;\n\tfont-size: 13px;\n\tfont-weight: normal;\n\tmargin: 0;\n}\n\n.footer-distributed .footer-company-about span{\n\tdisplay: block;\n\tcolor:  #ffffff;\n\tfont-size: 14px;\n\tfont-weight: bold;\n\tmargin-bottom: 20px;\n}\n\n.footer-distributed .footer-icons{\n\tmargin-top: 25px;\n}\n\n.footer-distributed .footer-icons a{\n\tdisplay: inline-block;\n\twidth: 35px;\n\theight: 35px;\n\tcursor: pointer;\n\tbackground-color:  #33383b;\n\tborder-radius: 2px;\n\n\tfont-size: 20px;\n\tcolor: #ffffff;\n\ttext-align: center;\n\tline-height: 35px;\n\n\tmargin-right: 3px;\n\tmargin-bottom: 5px;\n}\n\n/* If you don't want the footer to be responsive, remove these media queries */\n\n@media (max-width: 880px) {\n\n\t.footer-distributed{\n\t\tfont: bold 14px sans-serif;\n\t}\n\n\t.footer-distributed .footer-left,\n\t.footer-distributed .footer-center,\n\t.footer-distributed .footer-right{\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\tmargin-bottom: 40px;\n\t\ttext-align: center;\n\t}\n\n\t.footer-distributed .footer-center i{\n\t\tmargin-left: 0;\n\t}\n\n}"

/***/ }),

/***/ 749:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 750:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 751:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 752:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 753:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 754:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 755:
/***/ (function(module, exports) {

module.exports = ".homehead{\n    min-height: 100px;\n\n}\n\n\n.logo{\n    height: 90px;\n    width: 150px;\n}"

/***/ }),

/***/ 756:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 757:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 758:
/***/ (function(module, exports) {

module.exports = ".log{\n    width: 50%;\n    height: 50%;\n}"

/***/ }),

/***/ 759:
/***/ (function(module, exports) {

module.exports = "/*.Watch{\n    background-color: b\n}*/"

/***/ }),

/***/ 760:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 761:
/***/ (function(module, exports) {

module.exports = "img {\n    width: 100%;\n}\n.card .card-title {\n    font-size: 15px;\n    font-weight: 300;\n}\n\n.text-ellipsis {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}"

/***/ }),

/***/ 762:
/***/ (function(module, exports) {

module.exports = "img {\n    /*width: 100%;*/\n}\n\n.m-r-md {\n    margin-right: 5px;\n}\n\n.Mimage{\n    height: 380px;\n    width: 100%;\n}\n\n.dramaHead{\n    background-color: black;\n}\n\n.navbtn{\n    width: 150px;\n}"

/***/ }),

/***/ 763:
/***/ (function(module, exports) {

module.exports = ".text-ellipsis {\n    text-overflow: ellipsis;\n}\n\n.slide{\n    max-height: 400px !important;\n}"

/***/ }),

/***/ 764:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 765:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 766:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top homehead\" role=\"navigation\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" routerLink=\"/\"><img src=\"../assets/cedb.png\" class=\"logo\"></a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\" style=\"padding-top: 35px;\">\n        <ul class=\"nav navbar-nav\">\n            <li routerLinkActive=\"active\"><a routerLink=\"#\">Upcoming Dramas</a></li>\n            <li routerLinkActive=\"active\"><a routerLink=\"#\">Popular Dramas</a></li>\n            <li class=\"dropdown\" *ngIf=\"cnames\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">TV Channels <b class=\"caret\"></b></a>\n                <ul class=\"dropdown-menu\" >\n                    <li *ngFor=\"let c of cnames\"><a routerLink=\"/channel/{{c.name}}\">{{c.name}}</a></li>                \n                </ul>\n            </li>\n\t\t\t<li class=\"dropdown\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Catagories <b class=\"caret\"></b></a>\n                <ul class=\"dropdown-menu\">\n                    <li><a routerLink=\"catagory/Action\">Action</a></li>\n                    <li><a routerLink=\"catagory/Romance\">Romance</a></li>\n                    <li><a routerLink=\"catagory/History\">History</a></li>                  \n                </ul>\n            </li>\n        </ul>\n        <div class=\"col-sm-3 col-md-3\">\n            <form class=\"navbar-form\" role=\"search\">\n                <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"q\">\n                    <div class=\"input-group-btn\">\n                        <button class=\"btn btn-default\" type=\"submit\"><i class=\"glyphicon glyphicon-search\"></i></button>\n                    </div>\n                </div>\n            </form>\n        </div>\n        <ul class=\"nav navbar-nav navbar-right\">\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a routerLink=\"login\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n            <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">LogOut</a></li>\n        </ul>        \n    </div>\n  </div>\n</nav>\n\n\n<div class=\"container app-container homebody\">\n    <br>\n      <flash-messages></flash-messages>\n      <router-outlet></router-outlet>\n </div>   \n<footer class=\"footer-distributed\">\n\n\t\t\t<div class=\"footer-left\">\n\n\t\t\t\t<h3>UCSC<span>29</span></h3>\n\n\t\t\t\t<p class=\"footer-links\">\n\t\t\t\t\t<a href=\"#\">Home</a>\n\t\t\t\t\t·\n\t\t\t\t\t<a href=\"#\">Blog</a>\n\t\t\t\t\t·\n\t\t\t\t\t<a href=\"#\">Pricing</a>\n\t\t\t\t\t·\n\t\t\t\t\t<a href=\"#\">About</a>\n\t\t\t\t\t·\n\t\t\t\t\t<a href=\"#\">Faq</a>\n\t\t\t\t\t·\n\t\t\t\t\t<a href=\"#\">Contact</a>\n\t\t\t\t</p>\n\n\t\t\t\t<p class=\"footer-company-name\">UCSC GROUP 29 &copy; 2017</p>\n\t\t\t</div>\n\n\t\t\t<div class=\"footer-center\">\n\n\t\t\t\t<div>\n\t\t\t\t\t<i class=\"fa fa-map-marker\"></i>\n\t\t\t\t\t<p><span>No: 35 Reid Avenue </span>Colombo 7, Sri Lanka.</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div>\n\t\t\t\t\t<i class=\"fa fa-phone\"></i>\n\t\t\t\t\t<p>+94 755 555</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div>\n\t\t\t\t\t<i class=\"fa fa-envelope\"></i>\n\t\t\t\t\t<p><a href=\"\">group29@gmail.com</a></p>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"footer-right\">\n\n\t\t\t\t<p class=\"footer-company-about\">\n\t\t\t\t\t<span>About the company</span>\n\t\t\t\t\tucsc 3rd year group project for Sri lanka teledrama industry providing platform for viwers and tv channels\n\t\t\t\t</p>\n\n\t\t\t\t<div class=\"footer-icons\">\n\n\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-github\"></i></a>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</footer>\n\n"

/***/ }),

/***/ 767:
/***/ (function(module, exports) {

module.exports = "\n<h3>Cast & Crew</h3>\n\n<div class=\"row is-flex\">\n    <div class=\"col-md-2\" *ngFor=\"let c of crew\">\n      <img src=\"assets/img/{{c.actor.imagePath}}\"style=\"width: 130px; height: 150px; \">\n      <h4>{{c.actor.name}}</h4>\n      <p>{{c.role}}</p>\n      <a routerLink=\"/actor/{{c.actor._id}}\">View Profile</a>\n  </div>\n</div>"

/***/ }),

/***/ 768:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf = \"actor\" style=\"background-color: black; margin: 0\">\n  <div class=\"col-md-3\">\n    <img src=\"assets/img/{{actor.imagePath}}\" alt=\"\" class=\"thumbnail Mimage\" style=\"margin-top: 10px;width: 250px; height:280px \"> \n  </div>\n\n  <div class=\"col-md-9\">\n    <h2>{{actor.name}}</h2>\n    <div *ngFor=\"let r of actor.roles\" style=\"display: inline\">\n      {{r}} |\n    </div>\n    <h3>Biography</h3>\n    <div *ngFor=\"let r of actor.biography\">\n      Birthday: {{r.dob}}\n      <p>{{r.description}}<p>\n    </div>\n  </div>\n  \n</div>\n\n<div class=\"row\" *ngIf = \"actor\">\n  <div class=\"col-md-8\">\n    <h3 class=\"orange-text\">Filomography</h3>\n    <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>Drama</th>\n        <th>Role</th>\n        <th>Year</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let r of actor.Filmograpghy\">\n        <td>{{r.Drama}}</td>\n        <td>{{r.Role}}</td>\n        <td>{{r.Year}}</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n    \n  <div class=\"col-md-4\" *ngIf = \"actor\">\n    <h3>Awards</h3>\n    <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>Award</th>\n        <th>Year</th>\n        <th>Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let a of actor.Awards\">\n        <td>{{a.awardName}}</td>\n        <td>{{a.year}}</td>\n        <td>{{a.description}}</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n      <h3>Photo Gallery</h3>\n  </div>\n</div>\n"

/***/ }),

/***/ 769:
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<div id=\"panel_r\">\n  <form class=\"form-horizontal\">\n    <fieldset>\n      <legend>Add Movie</legend>\n\n      <div class=\"form-group\">\n        <label class=\"col-lg-2 control-label\">Movie Title</label>\n        <div class=\"col-lg-10\">\n          <input type=\"text\" class=\"form-control\"  placeholder=\"Movie Name\">\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-lg-2 control-label\">TV Channel</label>\n        <div class=\"col-lg-10\">\n          <input type=\"text\" class=\"form-control\"  placeholder=\"Channel Name\">\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-lg-2 control-label\">Started year</label>\n        <div class=\"col-lg-10\">\n          <input type=\"text\" class=\"form-control\"  placeholder=\"Year\">\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-lg-2 control-label\">Show Time</label>\n        <div class=\"col-lg-10\">\n          <input type=\"text\" class=\"form-control\"  placeholder=\"Time\">\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-lg-2 control-label\">Status</label>\n        <div class=\"col-lg-10\">\n          <select class=\"form-control\" >\n            <option>Ongoing</option>\n            <option>Ended</option>\n          </select>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-lg-2 control-label\">Image Path</label>\n        <div class=\"col-lg-10\">\n          <input type=\"text\" class=\"form-control\"  placeholder=\"Past the online hosted url image\">\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-lg-2 control-label\">Rating</label>\n        <div class=\"col-lg-10\">\n          <input type=\"number\" class=\"form-control\"  placeholder=\"Starts from 0.0\">\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-lg-2 control-label\">Category</label>\n        <div class=\"col-lg-10\">\n          <select class=\"form-control\" >\n            <option>Love</option>\n            <option>Action</option>\n            <option>Horror</option>\n            <option>Cultural</option>\n            <option>Adults</option>\n            <option>Children</option>\n          </select>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-lg-2 control-label\">Overview</label>\n        <div class=\"col-lg-10\">\n          <textarea class=\"form-control\" rows=\"3\"></textarea>\n          <span class=\"help-block\">Discription - 250 Words</span>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-lg-2 control-label\">trailerURL</label>\n        <div class=\"col-lg-10\">\n          <input type=\"text\" class=\"form-control\"  placeholder=\"Youtube URL\">\n        </div>\n      </div>\n\n\n      <div class=\"form-group\">\n        <div class=\"col-lg-10 col-lg-offset-2\">\n          <button type=\"reset\" class=\"btn btn-default\">Cancel</button>\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        </div>\n      </div>\n\n    </fieldset>\n  </form>\n</div>\n"

/***/ }),

/***/ 770:
/***/ (function(module, exports) {

module.exports = "  <div class=\"sidebar\" data-color=\"red\" data-image=\"../assets/img/sidebar-1.jpg\" id=\"movie\">\n    <!--\n      Tip 1: You can change the color of the sidebar using: data-color=\"purple | blue | green | orange | red\"\n\n      Tip 2: you can also add an image using data-image tag\n     -->\n    <div class=\"logo\">\n      <a href=\"http://www.creative-tim.com\" class=\"simple-text\">\n        CEDb Admin\n      </a>\n    </div>\n\n    <div class=\"sidebar-wrapper\">\n      <ul class=\"nav\">\n        <li class=\"active\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n          <a href=\"dashboard.html\">\n            <i class=\"material-icons\">dashboard</i>\n            <p *ngIf=\"user\">Welcome : {{user.name}}</p>\n          </a>\n        </li>\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n          <a  [routerLink] = \"['/addmovie']\">\n            <i class=\"material-icons\">person</i>\n            <p>Add Movie</p>\n          </a>\n        </li>\n        <li>\n          <a href=\"table.html\">\n            <i class=\"material-icons\">content_paste</i>\n            <p>Table List</p>\n          </a>\n        </li>\n        <li>\n          <a href=\"typography.html\">\n            <i class=\"material-icons\">library_books</i>\n            <p>Typography</p>\n          </a>\n        </li>\n        <li>\n          <a href=\"icons.html\">\n            <i class=\"material-icons\">bubble_chart</i>\n            <p>Icons</p>\n          </a>\n        </li>\n        <li>\n          <a href=\"maps.html\">\n            <i class=\"material-icons\">location_on</i>\n            <p>Maps</p>\n          </a>\n        </li>\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n          <a [routerLink] = \"['/profile']\">\n            <i class=\"material-icons text-gray\">notifications</i>\n            <p>Profile</p>\n          </a>\n        </li>\n\n        <li class=\"active-pro\">\n          <a (click)=\"onLogoutClick()\" href=\"#\" >\n            <i class=\"material-icons\">unarchive</i>\n            <p>LogOut</p>\n          </a>\n        </li>\n\n      </ul>\n    </div>\n  </div>\n"

/***/ }),

/***/ 771:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n"

/***/ }),

/***/ 772:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"col-md-4\" id=\"login\">\n  <div class=\"card card-profile\">\n    <div class=\"card-avatar\">\n\n        <img class=\"img\" src=\"https://pickaface.net/assets/images/slides/slide2.png\" />\n\n    </div>\n\n    <div class=\"content\">\n      <h6 class=\"category text-gray\">Login Here!</h6>\n      <h4 class=\"card-title\">\n        <div class=\"col-md-12\" align=\"center\">\n          <form (submit)=\"onLoginSubmit()\">\n          <div class=\"form-group\">\n            <label class=\"control-label\">Username</label>\n            <input class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" type=\"text\" >\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label\">Password</label>\n            <input class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" type=\"password\" >\n          </div>\n          <div id=\"log\">\n            <button type=\"submit\" class=\"btn btn-danger\">Submit</button>\n          </div>\n          </form>\n        </div>\n      </h4>\n    </div>\n  </div>\n</div>\n<!--\n<div class=\"panel panel-info\" id=\"login\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">Login Here!</h3>\n  </div>\n  <form (submit)=\"onLoginSubmit()\">\n  <div class=\"panel-body\">\n    <div class=\"form-group\">\n      <label class=\"control-label\">Username</label>\n      <input class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" type=\"text\" >\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label\">Password</label>\n      <input class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" type=\"password\" >\n    </div>\n    <div id=\"log\">\n      <button type=\"submit\" class=\"btn btn-info\">Submit</button>\n    </div>\n  </div>\n  </form>\n</div>\n-->\n"

/***/ }),

/***/ 773:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"navbar navbar-default navbar-fixed-top homehead\" id=\"nave\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" routerLink=\"/\"><img src=\"../assets/cedb.png\" class=\"logo\"></a>\n      <button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-main\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    </div>\n    <div class=\"navbar-collapse collapse\" id=\"navbar-main\">\n      <ul class=\"nav navbar-nav\">\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink] = \"['admin']\">Home</a></li>\n      </ul>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <!--<li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink] = \"['/dashboard']\">Dashboard</a></li>-->\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink] = \"['/admin/login']\">SignIn</a></li>\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink] = \"['/admin/register']\">SignUp</a></li>\n       <!-- <li><a (click)=\"onLogoutClick()\"  href=\"#\">Logout</a></li>-->\n      </ul>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 774:
/***/ (function(module, exports) {

module.exports = "<app-dashboard></app-dashboard>\n<div *ngIf=\"user\" id=\"user\">\n  <div class=\"content\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"card\">\n            <div class=\"card-header\" data-background-color=\"red\">\n              <h4 class=\"title\">Profile Information</h4>\n              <p class=\"category\">Company Profile Information</p>\n            </div>\n            <div class=\"card-content table-responsive\">\n              <table class=\"table\">\n                <thead class=\"text-primary\">\n                <th>Static</th>\n                </thead>\n                <tbody>\n                <tr>\n                  <td>Username</td>\n                  <td>: {{user.username}}</td>\n                </tr>\n                <tr>\n                  <td>Email</td>\n                  <td>: {{user.email}}</td>\n                </tr>\n                <tr>\n                  <td>Registation No</td>\n                  <td>: {{user.regno}}</td>\n                </tr>\n                <tr>\n                  <td>Email</td>\n                  <td>: {{user.email}}</td>\n                </tr>\n                <tr>\n                  <td>Telephone Number</td>\n                  <td>: {{user.telephone}}</td>\n                </tr>\n                <tr>\n                  <td>Website</td>\n                  <td>: {{user.website}}</td>\n                </tr>\n                <tr>\n                  <td>Youtube Channel</td>\n                  <td>: {{user.youtube_channel}}</td>\n                </tr>\n                <tr>\n                  <td>Logo Link</td>\n                  <td>: {{user.logo}}</td>\n                </tr>\n                </tbody>\n              </table>\n\n            </div>\n          </div>\n        </div>\n\n      </div>\n"

/***/ }),

/***/ 775:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"card\" id=\"panel_r\">\n  <div class=\"card-header\" data-background-color=\"red\">\n    <h4 class=\"title\">Signup Here!</h4>\n    <p class=\"category\">Complete your profile</p>\n  </div>\n  <div class=\"panel-body\">\n    <form (submit)=\"onRegisterSubmit()\"  class=\"form-horizontal\">\n      <fieldset>\n        <legend>Ceylon Entertinment Database</legend>\n\n        <div class=\"form-group\">\n          <label class=\"col-lg-3 control-label\">Organization Name</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Name\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label  class=\"col-lg-3 control-label\">Email Address</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-lg-3 control-label\">Registration Number</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"regno\" name=\"regno\" placeholder=\"Reg No\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-lg-3 control-label\">Telephone Number</label>\n          <div class=\"col-lg-8\">\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"telephone\" name=\"telephone\" placeholder=\"Tel No\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-lg-3 control-label\">Web Site</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"website\" name=\"website\" placeholder=\"Web Site URL\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-lg-3 control-label\">Youtube Channel</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"youtube_channel\" name=\"youtube_channel\" placeholder=\"Youtube Channel URL\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-lg-3 control-label\">Logo</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"logo\" name=\"logo\" placeholder=\"Paste your online logo link URL\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-lg-3 control-label\">Username</label>\n          <div class=\"col-lg-8\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Choose an Username\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-lg-3 control-label\">Password</label>\n          <div class=\"col-lg-8\">\n            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Use a String password(Recomanded to use A-Z, a-z, 0-9, !@#$%^)*&^)\">\n\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-lg-3 control-label\">Conform Password</label>\n          <div class=\"col-lg-8\">\n            <input type=\"password\" class=\"form-control\" id=\"cpassword\" placeholder=\"Conform Password\">\n            <div class=\"checkbox\">\n              <label>\n                <input type=\"checkbox\"> Password Matched\n              </label>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"col-lg-10 col-lg-offset-2\">\n            <button type=\"reset\" class=\"btn btn-default\">Clear</button>\n            <button type=\"submit\" class=\"btn btn-danger\">Submit</button>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 776:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"channel\" style=\"background-color: black; margin: 0\">\n  <div class=\"col-md-3\">\n    <img src=\"assets/img/{{channel.logoUrl}}\" alt=\"\" class=\"thumbnail Mimage\" style=\"margin-top: 10px\"> \n  </div>\n\n  <div class=\"col-md-6\">\n    <h2>{{channel.name}}\n      <small class=\"label label-warning\">\n        rate\n        <i class=\"glyphicon glyphicon-star\"></i>\n      </small>\n    </h2>\n    <p>{{channel.Description}}</p>\n    <h3>Overview</h3>\n    <div style=\"height: 60px;\">\n      \n    </div>\n    <img src=\"assets/img/star1.png\" style=\"height: 40px; width: 180px;\"> \n    <button class=\"btn btn-info\">Rate</button>\n  </div>\n  <div class=\"col-md-3\">\n    <h3>Drama Shedule</h3>\n    <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>Drama</th>\n        <th>Time</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let a of popularList\">\n        <td>{{a.movieTitle}}</td>\n        <td>{{a.showTime}}</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n  \n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h3 class=\"orange-text\"> All Dramas</h3>\n    <div class=\"row is-flex\">\n      <div class=\"col-sm-6 col-md-4 col-lg-3 col-xs-6\" *ngFor=\"let movie of popularList; let i = index;\">\n        <movie-card [movie]=\"movie\"></movie-card>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n    \n  \n\n\n"

/***/ }),

/***/ 777:
/***/ (function(module, exports) {

module.exports = "<div class=\"row is-flex\" style=\"padding-top: 20px;\">\n  <div class=\"col-md-2\" *ngFor=\"let epi of filterepisode\">\n      <img src=\"assets/img/{{epi.episodeImagePath}}\"style=\"width: 170px; height: 150px; \">\n      <h4>{{epi.episodeTitle}}</h4>\n      <p>{{epi.episodeOverview}}</p>\n      <button class=\"btn btn-default\" (click)= \"ClickButton(epi.episodeURL)\">Watch Now</button>\n  </div>\n</div>\n\n<popup>\n  <div class=\"embed-responsive embed-responsive-16by9\">\n      <iframe class=\"embed-responsive-item\" [src]=\"url\"></iframe>\n  </div>\n</popup>"

/***/ }),

/***/ 778:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\" style=\"padding-bottom: 30px;\">\n  <div class=\"col-md-4\">\n  </div>\n  <div class=\"col-md-4\">\n    <div style=\"background-color: black; padding: 50px\">\n    <h2>Login</h2>\n    <form (ngSubmit)=\"onLoginSubmit()\">\n      <div class=\"form-group\">\n        <label>Username</label>\n        <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"text\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n      </div>\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"submit\">\n        <a routerLink=\"register\">Register</a>\n    </form>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n  </div>\n</div>\n\n"

/***/ }),

/***/ 779:
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"thumbnail\">\n  <img src=\"https://image.tmdb.org/t/p/w300/{{movie.poster_path}}\" *ngIf=\"movie.poster_path\">\n  <img src=\"assets/img/abstract-image.jpg\" *ngIf=\"!movie.poster_path\">\n  <div class=\"caption\">\n    <h4 class=\"text-ellipsis\">\n      <a routerLink=\"/movie/{{movie.id}}\" title=\"{{movie.title}}\">{{movie.title}}</a>\n    </h4>\n    <p><strong>Release Date: </strong>{{movie.release_date}}</p>\n    <p>\n      <a routerLink=\"/movie/{{movie.id}}\">View details &raquo;</a>\n      <small class=\"label label-success pull-right\" *ngIf=\"movie.vote_average\">\n        {{movie.vote_average}}\n        <i class=\"glyphicon glyphicon-star\"></i>\n      </small>\n    </p>\n  </div>\n</div>-->\n\n\n<div class=\"thumbnail\" style=\"background-color: black\">\n  <img src=\"assets/img/{{movie.imagePath}}\" *ngIf=\"movie.imagePath\" style=\"height: 300px; width: 250px\">\n  <img src=\"assets/img/default.png\" *ngIf=\"!movie.imagePath\">\n  <div class=\"caption\">\n    <h4 class=\"text-ellipsis\">\n      <a routerLink=\"/movie/{{movie.id}}\" title=\"{{movie.movieTitle}}\">{{movie.movieTitle}}</a>\n    </h4>\n    <p><strong>{{movie.tvChannel}}</strong></p>\n    <p>\n      <a routerLink=\"/movie/{{movie._id}}\">View details &raquo;</a>\n      <small class=\"label label-success pull-right\" *ngIf=\"movie.rating\">\n        {{movie.rating}}\n        <i class=\"glyphicon glyphicon-star\"></i>\n      </small>\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ 780:
/***/ (function(module, exports) {

module.exports = "<div class=\"row dramaHead\" *ngIf=\"movie\" style=\"margin: 0;\">\n  <div class=\"col-md-4\">\n    <img src=\"assets/img/{{movie.imagePath}}\" alt=\"\" class=\"thumbnail Mimage\" style=\"margin-top: 10px\"> \n  </div>\n\n  <div class=\"col-md-6\">\n    <h2>{{movie.movieTitle}}\n      <small class=\"label label-warning\">\n        {{movie.rating}}\n        <i class=\"glyphicon glyphicon-star\"></i>\n      </small>\n    </h2>\n    <p>{{movie.startedYear}}</p>\n    <p>\n      <a *ngFor=\"let genre of movie.catagory\" class=\"label label-info m-r-md\">\n        {{genre}}\n      </a>\n    </p>\n    <p>Sesons {{movie.numberOfSeasons}} | Episodes {{movie.numberOfEpisodes}} | {{movie.status}} </p>\n    <h3>Overview</h3>\n    <p style=\"height: 120px\">\n      {{movie.overview}}\n    </p>\n    <star-rating-comp   [starType]=\"'svg'\"\n                        [rating]= r\n                        [size]=\"'medium'\"\n                        [hoverEnabled]=\"true\"\n                        [numOfStars]=\"10\"\n                        (onClick)=\"onClick($event)\" \n                        (onRatingChange)=\"onRatingChange($event)\"\n                        (onHoverRatingChange)=\"onHoverRatingChange($event)\" style=\"float: left\">                             \n    </star-rating-comp>\n    <span style=\"width: 20px;\">Rate: {{onclickrate}}</span>\n\n    <!--{{onHoverRatingChangeResult | json}}-->\n    <!--<p>onClickResult: {{onClickResult | json}}</p>\n    <p>onRatingChangeResult: {{onRatingChangeResult | json}}</p>-->\n\n    <button class=\"btn btn-info\">Add to Watch List</button>\n  </div>\n\n  <div *ngIf=\"channel\" class=\"col-md-2\" style=\"align-content: center\">\n    <!--<p>{{movie.tvChannel}}</p>-->\n    <img src=\"assets/img/{{channel.logoUrl}}\" alt=\"\" style=\"width: 70px; height: 70px\"> \n    <p>Everyday {{movie.showTime}} </p>\n    <a routerLink=\"/channel/{{channel.name}}\" >Visit Channel</a>\n\n    <div style=\"margin-top: 100px;\" id=\"middle\">\n      <button (click)=\"getepisode()\" onClick=\"document.getElementById('middle').scrollIntoView()\" class=\"btn btn-info navbtn\">Episodes<img src=\"assets/img/down.png\" alt=\"\" style=\"width: 30px; height: 30px;float: right\"> </button>\n      <button (click)=\"getactor()\" onClick=\"document.getElementById('middle').scrollIntoView()\" class=\"btn btn-info navbtn\">Cast & Crew <img src=\"assets/img/down.png\" alt=\"\" style=\"width: 30px; height: 30px;float: right\"></button>\n      <button (click)=\"getreview()\" onClick=\"document.getElementById('middle').scrollIntoView()\" class=\"btn btn-info navbtn\">Reviews <img src=\"assets/img/down.png\" alt=\"\" style=\"width: 30px; height: 30px;float: right\"></button>\n    </div>\n  </div>\n  \n</div>\n\n<div class=\"row\" *ngIf=\"review==true\">\n  <div class=\"col-md-6\">\n    <!--Trailer-->\n    <div>\n        <h2>Trailer</h2>\n        <div class=\"embed-responsive embed-responsive-16by9\">\n          <iframe class=\"embed-responsive-item\" [src]=\"url\"></iframe>\n        </div>\n    </div>\n    <!--Trailer-->\n\n    \n  </div>\n\n  <div class=\"col-md-6\" >\n    <div>\n      <h2>Reviews</h2>\n      <div *ngFor=\"let review of com\">\n        <blockquote>\n          <p class=\"text-justify\">{{review.text}}</p>\n          <footer><cite title=\"{{review.author}}\"><a href=\"{{review.url}}\" target=\"_blank\">{{review.postedBy}}</a><br>{{review.date}}</cite></footer>\n        </blockquote>\n      </div>\n      <flash-messages></flash-messages>\n      <form (submit) = \"addReview()\">\n        <div class=\"form-group\">\n          <textarea class=\"form-control\" [(ngModel)] = \"comment\" name=\"comment\"> Add your review</textarea>\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Add</button>\n      </form>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"epi==true\">\n    <h3>Episodes</h3>\n    <div *ngFor=\"let i of s\" style=\"display: inline\">\n    <a (click)=\"change(i)\">Season {{i}}</a> |\n    </div>\n    <app-episode-list [snumber]=\"season\" [episode]=\"movie.episode\"></app-episode-list>\n</div>\n\n<div *ngIf=\"actor==true\">\n    <app-actor-list [actors]=\"movie.crew\"></app-actor-list>\n</div>\n\n"

/***/ }),

/***/ 781:
/***/ (function(module, exports) {

module.exports = "<!--Slide show-->\n<div class=\"row\" >\n  <div class=\"col-sm-12\">\n    <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n      <!-- Indicators -->\n      <ol class=\"carousel-indicators\">\n        <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n        <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n      </ol>\n\n      <!-- Wrapper for slides -->\n      <div class=\"carousel-inner\" style=\"height: 380px;\" role=\"listbox\">\n        <div class=\"item\">\n          <img src=\"assets/img/cover1.jpg\" alt=\"Image\">\n          <div class=\"carousel-caption\">\n            <!--<h3>More Sell $</h3>\n            <p>Lorem ipsum...</p>-->\n          </div>      \n        </div>\n        \n        <div class=\"item active\">\n          <img src=\"assets/img/cover6.jpg\" alt=\"Image\">\n          <div class=\"carousel-caption\">\n            <!--<h3>Sell $</h3>\n            <p>Money Money.</p>-->\n          </div>      \n        </div>\n\n        <div class=\"item\">\n          <img src=\"assets/img/cover3.png\" alt=\"Image\">\n          <div class=\"carousel-caption\">\n            <!--<h3>More Sell $</h3>\n            <p>Lorem ipsum...</p>-->\n          </div>      \n        </div>\n\n        \n      </div>\n\n      <!-- Left and right controls -->\n      <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n        <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n      <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n        <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </div>\n  </div>\n</div>\n<!--end silde show-->\n<!--  \n<!--<div class=\"row\">\n  <div class=\"col-sm-12\">\n  <div *ngIf=\"searchRes\">\n    <h3 class=\"orange-text\">Search Results</h3>\n    <div class=\"row is-flex\">\n      <div class=\"col-sm-6 col-md-4 col-lg-3 col-xs-6\" *ngFor=\"let movie of searchRes; let i = index;\">\n        <movie-card [movie]=\"movie\"></movie-card>\n      </div>\n    </div>\n  </div>\n  </div>\n  </div>-->\n\n\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <h3 class=\"orange-text\">Popular Dramas</h3>\n    <div class=\"row is-flex\">\n      <div class=\"col-sm-6 col-md-4 col-lg-3 col-xs-6\" *ngFor=\"let movie of popularList; let i = index;\">\n        <movie-card [movie]=\"movie\"></movie-card>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n<h3 class=\"orange-text\">Top Rated Dramas</h3>\n\n<div class=\"row is-flex\">\n  <div class=\"col-sm-6 col-md-4 col-lg-3 col-xs-6\" *ngFor=\"let movie of topRatedList; let i = index;\">\n    <movie-card [movie]=\"movie\"></movie-card>\n  </div>\n</div>\n  </div>\n</div>\n"

/***/ }),

/***/ 782:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"padding-bottom: 30px;\">\n  <div class=\"col-md-4\">\n  </div>\n  <div class=\"col-md-4\">\n    <div style=\"background-color: black; padding: 50px\">\n  <h2 style=\"text-align: center\">Register</h2>\n  <form (ngSubmit)=\"onRegisterSubmit()\">\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Username</label>\n      <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Email</label>\n      <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Password</label>\n      <input type=\"text\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n    </div>\n      <input type=\"submit\" class=\"btn btn-primary\" value=\"submit\">\n  </form>\n</div>\n\n  </div>\n  <div class=\"col-md-4\">\n  </div>\n</div>\n"

/***/ }),

/***/ 783:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h3 class=\"orange-text\"> All Dramas</h3>\n    <div class=\"row is-flex\">\n      <div class=\"col-sm-6 col-md-4 col-lg-3 col-xs-6\" *ngFor=\"let movie of dramabycat; let i = index;\">\n        <movie-card [movie]=\"movie\"></movie-card>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ })

},[1045]);
//# sourceMappingURL=main.bundle.map