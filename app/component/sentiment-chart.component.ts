import { Component, OnInit, Input } from '@angular/core';
import { Sentiment } from '../model/sentiment';
import { OnActivate } from '@angular/router';

declare var Chart:any;

@Component({
    selector: 'sentiment-chart',
    template: `
        <section>
            <canvas id="chart" width="400" height="200"></canvas>
        </section>
    `
})
export class SentimentChartComponent implements OnActivate {    
    @Input()
    sentiments: Sentiment[];
    
    routerOnActivate() {
        let chartContext = document.getElementById("chart");
        let chart = new Chart(chartContext, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [5, 10, 15],
                    backgroundColor: [ "#FF0000", "#00FF00", "#0000FF"],
                    label: 'Sentiments'
                }],
                labels: ["Positive", "Negative", "Neutral"]
            }
        });
    }    
}