import { Component, Input } from '@angular/core';
import { Sentiment } from '../model/sentiment';

@Component({
    selector: 'sentiment-detail',
    template: `
        <div>
            <h1>{{sentiment.username}}</h1>
            <p>{{sentiment.status}}</p>
        </div>
    `
})
export class SentimentDetailComponent {
    @Input()
    sentiment: Sentiment;
}