import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
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
export class SentimentChartComponent implements AfterViewInit {    
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
        // this.chart = new Chart(this.context, {
        //     type: 'doughnut',
        //     data: {
        //         datasets: [{
        //             data: [5, 10, 15],
        //             backgroundColor: [ "#FF0000", "#00FF00", "#0000FF"],
        //             label: 'Sentiments'
        //         }],
        //         labels: ["Positive", "Negative", "Neutral"]
        //     }
        // });
        this.chart = new Chart(this.context, {
            type: 'doughnut',
            data: {
                labels: [
                    "Red",
                    "Green",
                    "Yellow"
                ],
                datasets: [
                    {
                        data: [300, 50, 100],
                        backgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ]
                    }]
            },
            options: {
                elements: {
                    arc: {
                        borderColor: "#000000"
                    }
                }
            }
        });
    }    
}