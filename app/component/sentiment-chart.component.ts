import { Component, OnInit, Input, AfterViewInit, OnChanges, SimpleChange } from '@angular/core';
import { Sentiment } from '../model/sentiment';
import { OnActivate } from '@angular/router';

declare var Chart:any;

@Component({
    selector: 'sentiment-chart',
    template: `
        <div>
            <canvas id="mychart" width="400" height="200"></canvas>
        </div>
    `
})
export class SentimentChartComponent implements AfterViewInit, OnChanges {    
    @Input()
    sentiments: Sentiment[];
    context: any;
    chart: any;
    
    constructor() {
        Chart.defaults.global.responsive = true;
    }
    
    ngAfterViewInit() {
        let canvas = <HTMLCanvasElement> document.getElementById("mychart");
        this.context = <CanvasRenderingContext2D> canvas.getContext("2d");
        this.chart = new Chart(this.context, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [this.numberOfPositiveSentiments(), this.numberOfNegativeSentiments(), this.numberOfNeutralSentiments()],
                    backgroundColor: [ "#b5f2b8", "#f26562", "#9bd7f2"],
                    label: 'Sentiments'
                }],
                labels: ["Positive", "Negative", "Neutral"]
            }
        });       
    }
    
    ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
        if(this.chart && this.chart.data.datasets[0]) {            
            this.chart.data.datasets[0].data = [this.numberOfPositiveSentiments(), this.numberOfNegativeSentiments(), this.numberOfNeutralSentiments()];
            this.chart.update();
        }
    }    
    
    numberOfPositiveSentiments() {
        return this.sentiments.filter(sentiment => sentiment.polarity === 4).length;
    }
    
    numberOfNegativeSentiments() {        
        return this.sentiments.filter(sentiment => sentiment.polarity === 0).length;
    }
    
    numberOfNeutralSentiments() {        
        return this.sentiments.filter(sentiment => sentiment.polarity === 2).length;
    }
}