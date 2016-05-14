import { Component } from '@angular/core';
import { OnActivate } from '@angular/router';
import { Sentiment } from '../model/sentiment';
import { SENTIMENTS } from '../model/mock-sentiments';
import { SentimentDetailComponent } from './sentiment-detail.component';
import { SentimentService } from '../service/sentiment.service';

@Component({
    selector: 'sentiments',
    template: `
        <div class="container">
            <h1>Sentiments</h1>
            <span class="fa fa-spinner fa-spin fa-3x fa-fw" *ngIf="!sentiments"></span>
            <sentiment-detail *ngFor="let sentiment of sentiments" [sentiment]="sentiment"></sentiment-detail>
        </div>
    `,
    directives: [SentimentDetailComponent]
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