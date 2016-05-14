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
var twitter_service_1 = require("../service/twitter.service");
var LandingComponent = (function () {
    function LandingComponent(twitter) {
        this.twitter = twitter;
    }
    LandingComponent.prototype.loginTwitter = function () {
        this.twitter.login();
    };
    LandingComponent = __decorate([
        core_1.Component({
            selector: 'landing',
            template: "\n    <div class=\"jumbotron\">\n        <div class=\"container\">\n            <div>\n                <h1>Moody</h1>\n                <p>The emotional polarity of your social networks.</p>\n                <p>\n                    <a class=\"btn btn-primary btn-lg\" role=\"button\" (click)=\"loginTwitter()\">Continue with Twitter</a>\n                    <a class=\"btn btn-primary btn-lg\" role=\"button\">Continue with Facebook</a>\n                </p>\n            </div>\n        </div>  \n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof twitter_service_1.TwitterService !== 'undefined' && twitter_service_1.TwitterService) === 'function' && _a) || Object])
    ], LandingComponent);
    return LandingComponent;
    var _a;
}());
exports.LandingComponent = LandingComponent;
//# sourceMappingURL=landing.component.js.map