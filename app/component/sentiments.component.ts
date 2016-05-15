import { Component } from '@angular/core';
import { OnActivate } from '@angular/router';
import { Sentiment } from '../model/sentiment';
import { SentimentDetailComponent } from './sentiment-detail.component';
import { SentimentFilterComponent} from './sentiment-filter.component';
import { SentimentCountSummaryComponent } from './sentiment-count-summary.component';
import { SentimentService } from '../service/sentiment.service';

@Component({
    selector: 'sentiments',
    template: `
        <div class="container">
            <h1>Sentiments</h1>
            <section class="col-md-3">
                <sentiment-filter></sentiment-filter>
            </section>            
            <span class="fa fa-spinner fa-pulse fa-3x fa-fw" *ngIf="!sentiments"></span>
            <section class="col-md-9" *ngIf="sentiments">
                <section class="rows">
                    <div class="col-md-6">
                        <h4>Percentage of Sentiments</h4>
                    </div>
                    <div class="col-md-6">
                        <h4>Number of Sentiments <span class="badge">{{sentiments.length}}</span></h4>
                        <sentiment-count-summary [sentiments]="sentiments"></sentiment-count-summary>
                    </div>
                </section>
                <section class="col-md-12">
                    <h4>Statuses</h4>
                    <sentiment-detail *ngFor="let sentiment of sentiments" [sentiment]="sentiment"></sentiment-detail>
                </section>
            </section>
        </div>
    `,
    directives: [
        SentimentDetailComponent,
        SentimentFilterComponent,
        SentimentCountSummaryComponent
    ]
})
export class SentimentsComponent implements OnActivate {
    sentiments: Sentiment[];
    
    constructor(private sentimentService: SentimentService) {
        
    }
    
    routerOnActivate() {
         return this.sentimentService.getSentiments()
                                     .then(sentiments => this.sentiments = sentiments);
    }
}