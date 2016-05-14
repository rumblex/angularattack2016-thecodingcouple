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
        this.sentiments = [
            { "username": "Ashley Joe", "status": "I love life", "emotion": "positive", "avatarUrl": "", "date": new Date() },
            { "username": "Jame Michael", "status": "I hate life", "emotion": "negative", "avatarUrl": "", "date": new Date() },
            { "username": "Hoe Joe", "status": "I am okay with life", "emotion": "neutral", "avatarUrl": "", "date": new Date() }
        ];
        
        return Promise.resolve(this.sentiments);
        // return this.sentimentService.getSentiments()
        //                             .then(sentiments => this.sentiments = sentiments);
    }
}