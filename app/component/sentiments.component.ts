import { Component, OnInit } from '@angular/core';
import { Sentiment } from '../model/sentiment';
import { SentimentDetailComponent } from './sentiment-detail.component';
import { SentimentService } from '../service/sentiment.service';

@Component({
    selector: 'sentiments',
    template: `
        <div class="container">
            <h1>Sentiments</h1>
            <sentiment-detail *ngFor="let sentiment in sentiments" [sentiment]="sentiment"></sentiment-detail>
        </div>
    `,
    providers: [SentimentDetailComponent]
})
export class SentimentsComponent implements OnInit {
    sentiments: Sentiment[];
    
    constructor(private sentimentService: SentimentService) {
        
    }
    
    ngOnInit() {
        this.sentimentService.getSentiments()
                             .then(sentiments => this.sentiments = sentiments);
    }
}