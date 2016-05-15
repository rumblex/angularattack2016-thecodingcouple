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
var sentiment_filter_component_1 = require('./sentiment-filter.component');
var sentiment_count_summary_component_1 = require('./sentiment-count-summary.component');
var sentiment_service_1 = require('../service/sentiment.service');
var SentimentsComponent = (function () {
    function SentimentsComponent(sentimentService) {
        this.sentimentService = sentimentService;
    }
    SentimentsComponent.prototype.routerOnActivate = function () {
        var _this = this;
        return this.sentimentService.getSentiments()
            .then(function (sentiments) { return _this.sentiments = sentiments; });
    };
    SentimentsComponent = __decorate([
        core_1.Component({
            selector: 'sentiments',
            template: "\n        <div class=\"container\">\n            <h1>Sentiments</h1>\n            <section class=\"col-md-3\">\n                <sentiment-filter></sentiment-filter>\n            </section>            \n            <span class=\"fa fa-spinner fa-pulse fa-3x fa-fw\" *ngIf=\"!sentiments\"></span>\n            <section class=\"col-md-9\" *ngIf=\"sentiments\">\n                <section class=\"rows\">\n                    <div class=\"col-md-6\">\n                        <h4>Percentage of Sentiments</h4>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <h4>Number of Sentiments</h4>\n                        <sentiment-count-summary [sentiments]=\"sentiments\"></sentiment-count-summary>\n                    </div>\n                </section>\n                <section class=\"col-md-12\">\n                    <sentiment-detail *ngFor=\"let sentiment of sentiments\" [sentiment]=\"sentiment\"></sentiment-detail>\n                </section>\n            </section>\n        </div>\n    ",
            directives: [
                sentiment_detail_component_1.SentimentDetailComponent,
                sentiment_filter_component_1.SentimentFilterComponent,
                sentiment_count_summary_component_1.SentimentCountSummaryComponent
            ]
        }), 
        __metadata('design:paramtypes', [sentiment_service_1.SentimentService])
    ], SentimentsComponent);
    return SentimentsComponent;
}());
exports.SentimentsComponent = SentimentsComponent;
//# sourceMappingURL=sentiments.component.js.map