import { Component, Input } from '@angular/core';
import { Sentiment } from '../model/sentiment';

@Component({
    selector: 'sentiment-detail',
    template: `
        <div class="panel">
            <h3>{{sentiment.username}}</h3>
            <p>{{sentiment.status}}</p>
        </div>
    `
})
export class SentimentDetailComponent {
    @Input()
    sentiment: Sentiment;
}