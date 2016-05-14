import { Component, Input } from '@angular/core';
import { Sentiment } from '../model/sentiment';

@Component({
    selector: 'sentiment-detail',
    template: `
        <div class="list-group-item" [class.list-group-item-danger]="sentiment.polarity === 0" 
                                     [class.list-group-item-default]="sentiment.polarity === 2" 
                                     [class.list-group-item-success]="sentiment.polarity === 4" >
            <div class="media">
                <div class="media-left">
                    <a href="#">
                        <img [src]="sentiment.avatarUrl">
                    </a>
                </div>
                <div class="media-body">
                    <h4 class="media-heading"><a [href]="sentiment.profileUrl">{{sentiment.username}}</a></h4>
                    <p>{{sentiment.status}}</p>
                </div>
            </div>
        </div>
    `
})
export class SentimentDetailComponent {
    @Input()
    sentiment: Sentiment;
}