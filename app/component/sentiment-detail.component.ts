import { Component, Input } from '@angular/core';
import { Sentiment } from '../model/sentiment';

@Component({
    selector: 'sentiment-detail',
    template: `
        <div class="list-group-item" [class.list-group-item-danger]="sentiment.emotion === 0" 
                                     [class.list-group-item-default]="sentiment.emotion === 2" 
                                     [class.list-group-item-success]="sentiment.emotion === 4" >
            <div class="media">
                <div class="media-left">
                    <a href="#">
                        <img [src]="sentiment.avatarUrl">
                    </a>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">{{sentiment.username}}</h4>
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