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
                <li class="list-group-item">
                    <span class="badge">{{sentiments.length}}</span>
                    Total
                </li>
            </ul>
        </section>
    `
})
export class SentimentCountSummaryComponent {
    @Input()
    sentiments: Sentiment[];
    
    get numberOfPositiveSentiments() {
        return this.sentiments.find(sentiment => sentiment.polarity === "4");
    }
    
    get numberOfNegativeSentiments() {        
        return this.sentiments.find(sentiment => sentiment.polarity === "0");
    }
    
    get numberOfNeutralSentiments() {        
        return this.sentiments.find(sentiment => sentiment.polarity === "2");
    }
}