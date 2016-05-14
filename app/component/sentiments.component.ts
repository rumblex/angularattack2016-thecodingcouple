import { Component, OnActivate } from '@angular/core';
import { Sentiment } from '../model/sentiment';
import { SentimentDetailComponent } from './sentiment-detail.component';
import { SentimentService } from '../service/sentiment.service';

@Component({
    selector: 'sentiments',
    template: `
        <div class="container">
            <h1>Sentiments</h1>
            <sentiment-detail *ngFor="let sentiment of sentiments" [sentiment]="sentiment"></sentiment-detail>
        </div>
    `,
    providers: [SentimentDetailComponent]
})
export class SentimentsComponent implements OnActivate {
    sentiments: Sentiment[];
    
    constructor(private sentimentService: SentimentService) {
        
    }
    
    routerOnActivate() {
        this.sentimentService.getSentiments()
                             .then(sentiments => this.sentiments = sentiments);
    }
}