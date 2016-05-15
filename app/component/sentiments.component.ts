import { Component } from '@angular/core';
import { OnActivate } from '@angular/router';
import { Sentiment } from '../model/sentiment';
import { SentimentDetailComponent } from './sentiment-detail.component';
import { SentimentFilterComponent} from './sentiment-filter.component';
import { SentimentService } from '../service/sentiment.service';

@Component({
    selector: 'sentiments',
    template: `
        <div class="container">
            <h1>Sentiments</h1>
            <section class="col-md-3">
                <sentiment-filter></sentiment-filter>
            </section>
            <section class="col-md-9">
                <span class="fa fa-spinner fa-pulse fa-3x fa-fw" *ngIf="!sentiments"></span>
                <sentiment-detail *ngFor="let sentiment of sentiments" [sentiment]="sentiment"></sentiment-detail>
            </section>
        </div>
    `,
    directives: [
        SentimentDetailComponent,
        SentimentFilterComponent
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