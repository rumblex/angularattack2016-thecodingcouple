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
var sentiment_detail_component_1 = require('./sentiment-detail.component');
var sentiment_service_1 = require('../service/sentiment.service');
var SentimentsComponent = (function () {
    function SentimentsComponent(sentimentService) {
        this.sentimentService = sentimentService;
    }
    SentimentsComponent.prototype.routerOnActivate = function () {
        this.sentiments = [
            { "username": "Ashley Joe", "status": "I love life", "emotion": "positive", "avatarUrl": "", "date": new Date() },
            { "username": "Jame Michael", "status": "I hate life", "emotion": "negative", "avatarUrl": "", "date": new Date() },
            { "username": "Hoe Joe", "status": "I am okay with life", "emotion": "neutral", "avatarUrl": "", "date": new Date() }
        ];
        return Promise.resolve(this.sentiments);
        // return this.sentimentService.getSentiments()
        //                             .then(sentiments => this.sentiments = sentiments);
    };
    SentimentsComponent = __decorate([
        core_1.Component({
            selector: 'sentiments',
            template: "\n        <div class=\"container\">\n            <h1>Sentiments</h1>\n            <sentiment-detail *ngFor=\"let sentiment of sentiments\" [sentiment]=\"sentiment\"></sentiment-detail>\n        </div>\n    ",
            directives: [sentiment_detail_component_1.SentimentDetailComponent]
        }), 
        __metadata('design:paramtypes', [sentiment_service_1.SentimentService])
    ], SentimentsComponent);
    return SentimentsComponent;
}());
exports.SentimentsComponent = SentimentsComponent;
//# sourceMappingURL=sentiments.component.js.map