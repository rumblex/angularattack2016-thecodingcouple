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
var social_service_1 = require("../service/social.service");
var LandingComponent = (function () {
    function LandingComponent(social, router) {
        this.social = social;
        this.router = router;
    }
    LandingComponent.prototype.loginTwitter = function () {
        var _this = this;
        this.social.loginTwitter()
            .then(function () { return _this.goToSentiments(); }, this.errorHandler);
    };
    LandingComponent.prototype.goToSentiments = function () {
        var link = ['Sentiments'];
        this.router.navigate(link);
    };
    LandingComponent.prototype.errorHandler = function (err) {
        console.log(err);
    };
    LandingComponent = __decorate([
        core_1.Component({
            selector: 'landing',
            template: "\n    <div class=\"jumbotron\">\n        <div class=\"container\">\n            <h1 class=\"moody\">MOODY</h1>\n            <p>The emotional polarity of your social network.</p>\n            <p>\n                <a class=\"btn btn-default btn-lg\" role=\"button\" (click)=\"loginTwitter()\">\n                    <span class=\"fa fa-twitter\" aria-hidden=\"true\"></span> \n                    Continue with Twitter\n                </a>\n            </p>         \n        </div>  \n    </div>\n    <div class=\"container\">\n        <div class=\"rows\">\n            <div class=\"col-md-4\">\n                <h2>Classify tweets</h2>\n                <p>Tweets are classified as positive, negative or neutral</p>\n            </div>            \n            <div class=\"col-md-4\">\n                <h2>Compare moods</h2>\n                <p>Who is the most positive or the most negative among your friends?</p>\n            </div>            \n            <div class=\"col-md-4\">\n                <h2>Powered by Sentiment140</h2>\n                <p><a href=\"http://www.sentiment140.com/\">Sentiment140</a> is a Twitter sentiment anaylsis tool.</p>\n            </div>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [social_service_1.SocialService, router_deprecated_1.Router])
    ], LandingComponent);
    return LandingComponent;
}());
exports.LandingComponent = LandingComponent;
//# sourceMappingURL=landing.component.js.map