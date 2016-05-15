import { Component, Input } from '@angular/core';
import { Sentiment } from '../model/sentiment';

@Component({
    selector: 'sentiment-count-summary',
    template: `
        <section>
            
        </section>
    `
})
export class SentimentCountSummaryComponent {
    @Input()
    sentiments: Sentiment[];
}