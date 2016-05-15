import { Component, Input } from '@angular/core';
import { Sentiment } from '../model/sentiment';

@Component({
    selector: 'sentiment-count-summary',
    template: `
        <section>
            <ul class="list-group">
                <li class="list-group-item">
                    <span class="badge">{{numberOfPositiveSentiments}}</span>
                    Positive
                </li>
                <li class="list-group-item">
                    <span class="badge">{{numberOfNegativeSentiments}}</span>
                    Negative
                </li>
                <li class="list-group-item">
                    <span class="badge">{{numberOfNeutralSentiments}}</span>
                    Neutral
                </li>
            </ul>
        </section>
    `
})
export class SentimentCountSummaryComponent {
    @Input()
    sentiments: Sentiment[];
    
    get numberOfPositiveSentiments() {
        return this.sentiments.filter(sentiment => sentiment.polarity === 4).length;
    }
    
    get numberOfNegativeSentiments() {        
        return this.sentiments.filter(sentiment => sentiment.polarity === 0).length;
    }
    
    get numberOfNeutralSentiments() {        
        return this.sentiments.filter(sentiment => sentiment.polarity === 2).length;
    }
}