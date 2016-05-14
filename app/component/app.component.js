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
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'moody-app',
            template: "\n    <header>\n        <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n            <div class=\"container\">\n                <div class=\"navbar-header\">\n                    <p>The Coding Couple | Moody</p>\n                </div>    \n                <div id=\"navbar\" class=\"collapse navbar-collapse\">                    \n                    <ul class=\"nav navbar-nav\">\n                        <li>Home</li>\n                        <li>About</li>\n                        <li>Contact</li>\n                    </ul>   \n                </div>         \n            </div>\n        </nav>\n    </header>\n    <main>\n        <div class=\"jumbotron\">\n            <div class=\"container\">\n                <div>\n                    <h1>Moody</h1>\n                    <p>The emotional polarity of your social networks.</p>\n                    <p>\n                        <a class=\"btn btn-primary btn-lg\" role=\"button\">Continue with Twitter</a>\n                        <a class=\"btn btn-primary btn-lg\" role=\"button\">Continue with Facebook</a>\n                    </p>\n                </div>\n            </div>  \n        </div>\n    </main>\n    <footer>\n        <div class=\"container\">\n            <small>&copy; 2016 The Coding Couple.</small>\n        </div>\n    </footer>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map