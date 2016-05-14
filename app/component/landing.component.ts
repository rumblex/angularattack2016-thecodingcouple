import { Component } from '@angular/core';

import {TwitterService} from "../service/twitter.service";
@Component({
    selector: 'landing',
    template: `
    <div class="jumbotron">
        <div class="container">
            <div>
                <h1>Moody</h1>
                <p>The emotional polarity of your social networks.</p>
                <p>
                    <a class="btn btn-primary btn-lg" role="button" (click)="loginTwitter()">Continue with Twitter</a>
                    <a class="btn btn-primary btn-lg" role="button">Continue with Facebook</a>
                </p>
            </div>
        </div>  
    </div>
    `
})

export class LandingComponent {
     constructor(private twitter : TwitterService){
        
     }
    
     loginTwitter() {
         this.twitter.login();
     }
}