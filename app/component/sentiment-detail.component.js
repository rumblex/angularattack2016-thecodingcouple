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
var sentiment_1 = require('../model/sentiment');
var moment_pipe_1 = require('../pipe/moment.pipe');
var SentimentDetailComponent = (function () {
    function SentimentDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', sentiment_1.Sentiment)
    ], SentimentDetailComponent.prototype, "sentiment", void 0);
    SentimentDetailComponent = __decorate([
        core_1.Component({
            selector: 'sentiment-detail',
            template: "\n        <div class=\"list-group-item\" [class.list-group-item-danger]=\"sentiment.polarity === 0\" \n                                     [class.list-group-item-default]=\"sentiment.polarity === 2\" \n                                     [class.list-group-item-success]=\"sentiment.polarity === 4\" >\n            <div class=\"media\">\n                <div class=\"media-left\">\n                    <a href=\"#\">\n                        <img [src]=\"sentiment.avatarUrl\">\n                    </a>\n                </div>\n                <div class=\"media-body\">\n                    <h4 class=\"media-heading\"><a target=\"_blank\" [href]=\"sentiment.profileUrl\">{{sentiment.username}}</a></h4>\n                    <p>{{sentiment.status}}</p>\n                    <p><small>{{sentiment.date | date:'longDate' }}</small></p>\n                </div>\n            </div>\n        </div>\n    ",
            pipes: [moment_pipe_1.MomentPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], SentimentDetailComponent);
    return SentimentDetailComponent;
}());
exports.SentimentDetailComponent = SentimentDetailComponent;
//# sourceMappingURL=sentiment-detail.component.js.map