import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import {SocialService} from "../service/social.service";
@Component({
    selector: 'landing',
    template: `
    <div class="jumbotron">
        <div class="container">
            <h1 class="moody">MOODY</h1>
            <p>The emotional polarity of your social network.</p>
            <p>
                <a class="btn btn-default btn-lg" role="button" (click)="loginTwitter()">
                    <span class="fa fa-twitter" aria-hidden="true"></span> 
                    Continue with Twitter
                </a>
            </p>         
        </div>  
    </div>
    <div class="container">
        <div class="rows">
            <div class="col-md-4">
                <h2>Classify statuses</h2>
                <p>Statuses fall under positive, negative or neutral</p>
            </div>            
            <div class="col-md-4">
                <h2>Compare moods</h2>
                <p>Who is the most positive or the most negative among your friends?</p>
            </div>            
            <div class="col-md-4">
                <h2>Powered by Sentiment140</h2>
                <p>Blah blah blah</p>
            </div>
        </div>
    </div>
    `
})
export class LandingComponent {
     constructor(private social: SocialService, private router: Router){
        
     }
    
     loginTwitter() {
         this.social.loginTwitter()
                    .then(() => this.goToSentiments(), this.errorHandler);
     }
     
     goToSentiments() {
         let link = ['Sentiments'];
         this.router.navigate(link);
     }
     
     errorHandler(err) {
         console.log(err);
     }
}