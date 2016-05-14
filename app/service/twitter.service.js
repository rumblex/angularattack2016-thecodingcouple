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
var TwitterService = (function () {
    function TwitterService() {
        OAuth.initialize("6mt4xJ4txgqrt7TGRFnqJLirGYQ");
    }
    TwitterService.prototype.login = function () {
        OAuth.popup("twitter")
            .done(function (result) {
            console.log("Done: " + result);
        })
            .fail(function (err) {
            console.log(err);
        });
    };
    TwitterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TwitterService);
    return TwitterService;
}());
exports.TwitterService = TwitterService;
//# sourceMappingURL=twitter.service.js.map