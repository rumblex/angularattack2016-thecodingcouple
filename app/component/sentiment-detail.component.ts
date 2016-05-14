import { Component, Input } from '@angular/core';
import { Sentiment } from '../model/sentiment';

@Component({
    selector: 'sentiment-detail',
    template: `
        <div class="panel" [class.panel-danger]="sentiment.emotion === 0" [class.panel-default]="sentiment.emotion === 2" [class.panel-success]="sentiment.emotion === 4" >
            <div class="panel-heading">
                <p>{{sentiment.username}}</p>
            </div>
            <div class="panel-body">
                <img [src]="sentiment.avatarUrl">
                <p>{{sentiment.status}}</p>
            </div>
        </div>
    `
})
export class SentimentDetailComponent {
    @Input()
    sentiment: Sentiment;
}