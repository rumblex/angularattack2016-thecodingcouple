"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var sentiment_service_1 = require('../service/sentiment.service');
var landing_component_1 = require('./landing.component');
var about_component_1 = require('./about.component');
var contact_component_1 = require('./contact.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Moody";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'moody-app',
            template: "\n    <header>\n        <nav class=\"navbar navbar-fixed-top\">\n            <div class=\"container\">\n                <div class=\"navbar-header\">\n                    <p class=\"navbar-brand\">The Coding Couple | Moody</p>\n                </div>    \n                <div id=\"navbar\" class=\"navbar-collapse collapse\">                    \n                    <ul class=\"nav navbar-nav\">\n                        <li><a [routerLink]=\"['Home']\">Home</a></li>\n                        <li><a [routerLink]=\"['About']\">About</a></li>\n                        <li><a [routerLink]=\"['Contact']\">Contact</a></li>\n                    </ul>   \n                </div>         \n            </div>\n        </nav>\n    </header>\n    <main>\n        <router-outlet></router-outlet>\n    </main>\n    <footer>\n        <div class=\"container\">        \n            <hr>\n            <p>&copy; 2016 The Coding Couple.</p>\n        </div>\n    </footer>",
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES,
                landing_component_1.LandingComponent,
                about_component_1.AboutComponent,
                contact_component_1.ContactComponent
            ],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                sentiment_service_1.SentimentService
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/',
                name: 'Home',
                component: landing_component_1.LandingComponent
            },
            {
                path: '/about',
                name: 'About',
                component: about_component_1.AboutComponent
            },
            {
                path: '/contact',
                name: 'Contact',
                component: contact_component_1.ContactComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map