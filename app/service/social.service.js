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
var SocialService = (function () {
    function SocialService() {
        OAuth.initialize("6mt4xJ4txgqrt7TGRFnqJLirGYQ");
    }
    SocialService.prototype.loginTwitter = function () {
        return new Promise(function (resolve, reject) {
            var twitter = OAuth.create('twitter');
            if (!twitter) {
                OAuth.popup("twitter", { cache: true })
                    .done(function (result) {
                    resolve(result);
                })
                    .fail(function (err) {
                    reject(err);
                });
            }
            else {
                resolve(twitter);
            }
        });
    };
    SocialService.prototype.getLatestTweets = function (cursor) {
        return this.loginTwitter().then(function (twitter) {
            var url = '/1.1/statuses/home_timeline.json';
            url += "?count=200";
            if (cursor) {
                url += '&max_id=' + cursor;
            }
            return new Promise(function (resolve, reject) {
                return twitter.get(url)
                    .done(function (response) {
                    var timeline = new Array();
                    response.forEach(function (entry) {
                        timeline.push({
                            user: entry.user.name,
                            profileImageUrl: entry.user.profile_image_url,
                            text: entry.text,
                            createdAt: new Date(entry.created_at),
                            url: "http://twitter.com/statuses/" + entry.id_str
                        });
                    });
                    resolve(timeline);
                })
                    .fail(function (error) {
                    reject(error);
                });
            });
        });
    };
    SocialService.prototype.searchTwitterUsers = function (query) {
        return this.loginTwitter().then(function (twitter) {
            var q = encodeURIComponent(query);
            var url = '1.1/users/search.json?q=';
            url += q;
            url += "&page=1&count=10";
            return new Promise(function (resolve, reject) {
                return twitter.get(url)
                    .done(function (response) {
                    var users = new Array();
                    response.forEach(function (entry) {
                        users.push({
                            id: entry.id,
                            name: entry.name,
                            profileImageUrl: entry.profile_image_url,
                            username: entry.screen_name,
                            url: "http://twitter.com/statuses/" + entry.id_str
                        });
                    });
                    resolve(users);
                })
                    .fail(function (error) {
                    reject(error);
                });
            });
        });
    };
    SocialService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SocialService);
    return SocialService;
}());
exports.SocialService = SocialService;
//# sourceMappingURL=social.service.js.map