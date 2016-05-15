import { Component, OnInit, Input } from '@angular/core';
import { Sentiment } from '../model/sentiment';
import Chart from 'chart/Chart';

@Component({
    selector: 'sentiment-chart',
    template: `
        <section>
            <canvas id="chart" width="400" height="400"></canvas>
        </section>
    `
})
export class SentimentChartComponent implements OnInit {    
    @Input()
    sentiments: Sentiment[];
    
    ngOnInit() {
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